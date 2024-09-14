import React, { FC, ReactNode, useState } from 'react'
import SvgIcon from './SvgIcon'
import * as s from './Tabs.module.less'

interface IProps {
  children?: ReactNode
  tabs: { id: string, icon: string, label: string }[]
  onTabClick: (id: string) => void
}

const Tabs: FC<IProps> = ({ tabs, onTabClick }) => {
  const [selectedTabId, setSelectedTabId] = useState<string>('basic')

  const handleTabClick = (id: string) => {
    setSelectedTabId(id)
    onTabClick(id)
  }

  return (
    <ul>
      {tabs.map((tab) =>
        <li key={tab.id} onClick={() => handleTabClick(tab.id)} className={selectedTabId === tab.id ? s.selected : ''}>
          <SvgIcon svgName={tab.icon} />
          <div>{tab.label}</div>
          {
            selectedTabId === tab.id && <SvgIcon svgName='triangle-top' svgClass={s.triangle}/>
          }
        </li>
      )}
    </ul>
  )
}

export default Tabs