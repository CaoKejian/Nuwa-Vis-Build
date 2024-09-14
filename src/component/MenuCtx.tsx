import React, { FC } from "react"
import Basic from "./basic"
import Put from "./put"
import Bigdata from "./bigdata"
import * as s from './MenuCtx.module.less'

interface IProps {
  tabId: string
}
const MenuCtx: FC<IProps> = ({tabId}) => { 
  console.log(tabId)
  const renderTabCtx = () => { 
    switch(tabId) {
      case 'basic':
        return <Basic />
      case 'put':
        return <Put />
      case 'bigdata':
        return <Bigdata />
      default:
        return <div>卡片内容渲染错误</div>
    }
  }

  return (
    <div className={s.wrapper}>{renderTabCtx()}</div>
  )
}

export default MenuCtx