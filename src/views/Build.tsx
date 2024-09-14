import React, { memo, useState } from 'react'
import type { FC } from 'react'
import Header from '../share/Header'
import * as s from './Build.less'
import MenuCtx from '../component/MenuCtx'

const Build: FC = () => {
  const [tabId, setTabId] = useState('basic')
  
  return (
    <div className={s.wrapper}>
      <Header changeTab={(id: string) => setTabId(id)}/>
      <div className={s.content}>
        <MenuCtx tabId={tabId}/>
      </div>
    </div>
  )
}

export default memo(Build)