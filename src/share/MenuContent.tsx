import React, { FC, memo } from "react"
import * as s from "./MenuContent.module.less"

interface IProps {
  tabId: string
}

const MenuContent: FC<IProps> = ({ tabId }) => {
  const list = [
    {
      name: '按钮组件',
      img: '',
      desc: '按钮组件-测试'
    },
    {
      name: '按钮组件2',
      img: '',
      desc: '按钮组件-测试'
    }
  ]
  return (
    <div className={s.wrapper}>
      {tabId}
    </div>
  )
}

export default memo(MenuContent)
