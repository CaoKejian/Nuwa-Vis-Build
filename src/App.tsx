import React from 'react'
import { RouterProvider } from 'react-router-dom'
import router from './config/router'

const App: React.FC = () => {
  console.log(1111111)
  return (
    <div>
      <h1>我是Header</h1>
      <RouterProvider router={router} />
      <h1>我是Footer</h1>
    </div>
  )
}

export default App
