import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../share/Header'
import * as s from './PageLayout.module.less'

const PageLayout: React.FC = () => {
  
  return (
    <div className={s.wrapper}>
      <Header />
      <Outlet />
    </div>
  )
}

export default PageLayout