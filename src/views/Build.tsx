import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import * as s from './Build.module.less'

interface IProps {
  children?: ReactNode
}

const Build: FC<IProps> = () => {
  return (
    <div className={s.wrapper}>build</div>
  )
}

export default memo(Build)