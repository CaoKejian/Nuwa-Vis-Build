import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import * as s from './BreadCrumb.module.less'
import { useNavigate } from 'react-router-dom'

interface IProps {
  children?: ReactNode,
  breadArr: { name: string, path: string, next: number | null, current: boolean, }[]
}

const BreadCrumb: FC<IProps> = ({ breadArr }) => {
  return (
    <div className={s.wrapper}>
      {breadArr.length > 0 && breadArr.map((bread, index) =>
        // eslint-disable-next-line no-use-before-define
        <BreadCrumbItem key={index} bread={bread} />
      )}
    </div>
  )
}

interface ItemProps {
  children?: ReactNode,
  bread: { name: string, path: string, next: number | null, current: boolean, },
}

const BreadCrumbItem: FC<ItemProps> = ({ bread }) => {
  const navigate = useNavigate()
  const goTo = (path='/') => {
    navigate(path)
  }
  return (
    <div className={s.bread}>
      <div className={bread.current ? s.active : s.static} onClick={() => goTo(bread?.path)}>{bread?.name}</div>
      {bread?.next ?
        <span>{'>'}</span> : <div>复制</div>
      }
    </div>
  )
}

export default memo(BreadCrumb)