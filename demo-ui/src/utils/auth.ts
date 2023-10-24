import { WebAuth } from '@chehejia/authli-js'
import { Modal } from '@chehejia/cfe-ui'

import { AUDIENCE, CLIENT_ID } from '@/constants'

const { confirm } = Modal

const notProd = true

export const getClientId = () => {
  if (notProd) {
    return CLIENT_ID.ontest
  }
  return CLIENT_ID.prod
}

export const getServiceId = () => {
  if (notProd) {
    return AUDIENCE.ontest
  }
  return AUDIENCE.prod
}

const auth = new WebAuth({
  clientId: getClientId(),
  env: notProd ? 'ontest' : 'prod'
})

export const handle401 = () => {
  return new Promise(() => {
    if ((confirm as any).isSuspend) return
    ;(confirm as any).isSuspend = true
    confirm({
      content: '当前登录状态已过期，请重新登录!',
      okText: '确定',
      okCancel: false,
      onOk() {
        auth.logout({
          federated: true,
          returnTo: `${window.location.origin}`
        })
        // window.location.reload()
      },
      onCancel() {
        //
      }
    })
  })
}

export default auth
