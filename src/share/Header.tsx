import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import * as s from './Header.less'
interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_left}>
        <span>拉桌落地页</span>
        <div>面包屑</div>
      </div>
      <div className={s.wrapper_middle}>基础信息</div>
      <div className={s.wrapper_right}>我</div>
    </div>
  )
}

export default memo(Header)