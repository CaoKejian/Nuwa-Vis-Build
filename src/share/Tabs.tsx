import React, { FC, ReactNode, useState } from 'react'
import SvgIcon from './SvgIcon'
import * as s from './Tabs.module.less'
import { CSSTransition } from 'react-transition-group'

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
            <CSSTransition
              in={selectedTabId === tab.id}
              timeout={300}
              classNames={{
                enter: s['triangle-enter'],
                enterActive: s['triangle-enter-active'],
                exit: s['triangle-exit'],
                exitActive: s['triangle-exit-active'],
              }}
              unmountOnExit
            >
              <SvgIcon svgName='triangle-top' svgClass={s.triangle} />
            </CSSTransition>
        </li>
      )}
    </ul>
  )
}

export default Tabs