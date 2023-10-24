import './App.css'
import { LogManager } from 'sec-core'
import { useUser } from '@chehejia/sec-hooks'
import AuthProvider from '@/components/AuthProvider'
import auth, { getServiceId } from '@/utils/auth'
import dayjs from 'dayjs'

function App() {
  const { userInfo, hasGranted } = useUser({ audience: getServiceId(), auth })
  const scopeYes = hasGranted('post:vuln') ? '✅' : '❌'
  const scopeNo = hasGranted('non-existent') ? '✅' : '❌'

  const instance = new LogManager()
  return (
    <AuthProvider>
      <div className='App'>
        <a target={'_blank'} href='https://www.npmjs.com/package/cobralee-utils'>
          @chehejia/sec-hooks
        </a>
        <div style={{ display: 'flex', gap: 16 }}>
          <div>nickname{userInfo?.nickname}</div>
          <div>
            post:vuln：{scopeYes} ｜ non-existent：{scopeNo}
          </div>
        </div>
        <line />
        <a target={'_blank'} href='https://www.npmjs.com/package/cobralee-core'>
          sec-core
        </a>
        <div>LogManager output: {dayjs(Number(instance.output())).format('YYYY-MM-DD HH-mm-ss')}</div>
        <line />
        <a target={'_blank'} href='https://www.npmjs.com/package/cobralee-core'>
          sec-components
        </a>
        <div>components</div>
      </div>
    </AuthProvider>
  )
}

export default App
