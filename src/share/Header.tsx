import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import * as s from './Header.module.less'
import BreadCrumb from './BreadCrumb'
import Tabs from './Tabs'
import useTabStore from '../store/store'

interface IProps {
  children?: ReactNode
}

const Header: FC<IProps> = () => {

  const breadArr: { name: string, path: string, current: boolean, next: number | null }[] = [
    {
      name: 'H5落地页',
      path: '/',
      next: 1,
      current: false,
    },
    {
      name: '个性化搭建页面',
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
  const tabs = [
    { id: 'basic', icon: 'basic', label: '基础配置' },
    { id: 'put', icon: 'put', label: '投放管理' },
    { id: 'bigdata', icon: 'bigdata', label: '数据分析' },
  ]
  const setTabId = useTabStore((state) => state.setTabId)

  const handleTabClick = (id: string) => {
    setTabId(id)
  }
  return (
    <div className={s.wrapper}>
      <div className={s.wrapper_left}>
        <span>拉桌落地页</span>
        <BreadCrumb breadArr={breadArr} />
      </div>
      <div className={s.wrapper_middle}>
        <div></div>
        <div className={s.wrapper_middle_set}>
          <Tabs tabs={tabs} onTabClick={handleTabClick}/>
        </div>
      </div>
      <div className={s.wrapper_right}>colinccao</div>
    </div>
  )
}

export default memo(Header)