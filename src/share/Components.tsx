import React, { FC, memo } from "react"
import * as s from "./components.module.less"

const Components: FC = () => {
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

    </div>
  )
}

export default memo(Components)
