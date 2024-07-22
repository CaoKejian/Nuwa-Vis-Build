import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/css/reset.less'
import './assets/css/vars.less'

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('root')
  if (container) {
    const root = createRoot(container)
    root.render(<App />)
  }
})
