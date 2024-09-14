import React, { memo, useState } from 'react'
import type { FC } from 'react'
import Header from '../share/Header'
import MenuContent from '../share/MenuContent'
import * as s from './Build.less'

const Build: FC = () => {
  const [tabId, setTabId] = useState('basic')

  return (
    <div className={s.wrapper}>
      <Header changeTab={(id: string) => setTabId(id)}/>
      <div className={s.content}>
        <MenuContent tabId={tabId}/>
      </div>
    </div>
  )
}

export default memo(Build)