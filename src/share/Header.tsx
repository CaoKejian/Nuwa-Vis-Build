import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import * as s from './Header.module.less'
import BreadCrumb from './BreadCrumb'

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {

  const breadArr: { name: string, path: string, current: boolean, next: number | null }[] = [
    {
      name: '拉桌落地页',
      path: '/',
      next: 1,
      current: false,
    },
    {
      name: '个性化搭建xxxxxxxxx',
      path: '/base',
      next: 2,
      current: false,

    },
    {
      name: 'aid: 182123123123123',
      path: '/me',
      next: null,
      current: true,
    }
  ]
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_left}>
        <span>拉桌落地页</span>
        <BreadCrumb breadArr={breadArr} />
      </div>
      <div className={s.wrapper_middle}>基础信息</div>
      <div className={s.wrapper_right}>我</div>
    </div>
  )
}

export default memo(Header)