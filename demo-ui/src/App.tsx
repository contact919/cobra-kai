import './App.css'
import { findItem, matchEnv } from 'cobralee-utils'
import { LogManager } from 'cobralee-core'

function App() {
  const list = [
    { name: 'l9', id: 1 },
    { name: 'l8', id: 2 }
  ]

  const item = findItem(list, (c) => c.id === 1)

  const instance = new LogManager({ userId: 'l1', message: 'xiang的自定义信息' })
  return (
    <div className='App'>
      <div>旗舰：{item?.name}</div>
      <div>当前环境：{matchEnv}</div>
      <div>LogManager调用: {instance.output()}</div>
    </div>
  )
}

export default App
