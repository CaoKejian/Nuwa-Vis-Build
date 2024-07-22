import React, { memo } from 'react'
import type { FC } from 'react'
import Header from '../share/Header'

const Build: FC = () => {
  return (
    <div>
      <Header />
    </div>
  )
}

export default memo(Build)