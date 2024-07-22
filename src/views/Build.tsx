import React, { memo } from 'react'
import type { FC } from 'react'
import * as s from './Build.less'
import Header from '../share/Header'

const Build: FC = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default memo(Build)