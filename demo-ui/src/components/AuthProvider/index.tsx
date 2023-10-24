import React, { useEffect, useMemo, useState } from 'react'

import { SCOPES } from '@/constants'
import auth, { getServiceId } from '@/utils/auth'

const AuthProvider: React.FC<React.PropsWithChildren> = ({ children }) => {
  const [isAuthticated, setIsAuthticated] = useState(false)
  const [ok, setOk] = useState(false)

  const handleIdaas = async () => {
    const isAuthenticated = await auth.isAuthenticated()

    if (isAuthenticated) {
      setIsAuthticated(true)

      const accessToken = (await auth.getToken({ audience: getServiceId() })) as string
      const { scopes } = await auth.parseAccessToken(accessToken)
      console.log('%c📢📢📢 🕺🕺🕺💃💃💃', 'padding: 2px 150px;background: #1890ff22; color: #f00;font-weight: 700;')
      console.log(`%c${accessToken}`, 'color: green;')
      console.log(`%c${scopes}`, 'color: red;')
    } else {
      try {
        const { isAuthenticated: isLogined }: any = await auth.handleRedirectCallback()
        const url = new URL(window.location.href)
        url.searchParams.delete('code')
        url.searchParams.delete('state')
        window.history.replaceState({}, '', url.toString())
        setIsAuthticated(isLogined)
      } catch (error) {
        const { isAuthenticated: isLogined }: any = await auth.authorize({
          redirectUri: window.location.href,
          requestLogin: true,
          multiAudience: {
            [getServiceId()]: {
              scope: SCOPES.join(' ')
            }
          }
        })
        setIsAuthticated(isLogined)

        if (!isLogined) {
          throw new Error('login fail')
        }
      }
    }
  }

  const getUserUrn = async () => {
    setOk(true)
  }

  const passed = useMemo(() => {
    return isAuthticated && ok
  }, [isAuthticated, ok])

  useEffect(() => {
    if (!isAuthticated) return
    getUserUrn()
  }, [isAuthticated])

  useEffect(() => {
    handleIdaas()
  }, [])

  if (!passed) {
    return <span>loading...</span>
  }

  return <>{children}</>
}

export default AuthProvider
