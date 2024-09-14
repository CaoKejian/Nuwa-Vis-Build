import React, { memo } from 'react'
import type { FC } from 'react'
import Header from '../share/Header'
import Component from '../share/Components'
import * as s from './Build.less'

const Build: FC = () => {
  return (
    <div>
      <Header />
      <div className={s.content}>
        <Component />
      </div>
    </div>
  )
}

export default memo(Build)