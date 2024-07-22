import React, { memo } from 'react'
import type { FC } from 'react'
import * as s from './Home.less'

const Home: FC = () => {
  return (
    <div className={s.footer}>Home</div>
  )
}

export default memo(Home)