import { useEffect, useState } from 'react'
import { isContainScopeBy } from '@chehejia/sec-utils'

type User = { openid: string; nickname: string; picture: string; legacyid?: string }

export interface UserOptions {
  /**IDaaS Audience */
  audience: string
  /**IDaaS  Auth 实例 */
  auth: any
}

/**
 * 获取 IDaaS 用户信息 用户权限
 */
export default function useUser(options: UserOptions) {
  const { audience, auth } = options
  const [userInfo, setUserInfo] = useState({} as User)
  const [piaScopes, setPiaScopes] = useState<string[]>([])

  const handlePia = async () => {
    try {
      const token = (await auth.getToken({ audience })) as string
      const { scopes } = await auth.parseAccessToken(token)
      setPiaScopes(scopes)
    } catch (error) {
      setPiaScopes([])
    }
  }

  const getInfo = async () => {
    try {
      const user = (await auth.getUser()) as User
      setUserInfo(user)
    } catch (error) {
      setUserInfo({} as User)
    }
  }

  useEffect(() => {
    getInfo()
    handlePia()
  }, [])

  return {
    userInfo,
    hasGranted: (scope: string | string[]) => {
      return isContainScopeBy(scope, piaScopes)
    }
  }
}
