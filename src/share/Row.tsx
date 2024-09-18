import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
import * as s from './Row.module.less'

interface IProps {
  children?: ReactNode
  label: string
  labelWidth?: string
}

const Row: FC<IProps> = ({ label, children, labelWidth = '120px' }) => {
  return (
    <div className={s.row}>
      <div className={s.label} style={{ flex: `0 0 ${labelWidth}` }}>{label}:</div>
      <div className={s.content}>{children}</div>
    </div>
  )
}

export default memo(Row)