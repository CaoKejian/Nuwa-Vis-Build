import React, { memo } from 'react'
import type { FC } from 'react'
import * as s from './Activity.less'
import MenuCtx from '../component/MenuCtx'

const Activity: FC = () => {
  
  return (
    <div className={s.wrapper}>
      <div className={s.content}>
        <MenuCtx />
      </div>
    </div>
  )
}

export default memo(Activity)