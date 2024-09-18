import React, { FC } from "react"
import Basic from "./basic"
import Put from "./put"
import Bigdata from "./bigdata"
import * as s from './MenuCtx.module.less'
import { Watermark } from "tdesign-react"
import useTabStore from "../store/store"


const MenuCtx: FC = () => {
  const tabId = useTabStore((state) => state.tabId)

  const renderTabCtx = () => {
    switch (tabId) {
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
    <div className={s.wrapper}>
      <Watermark watermarkContent={{ text: 'colinccao' }} y={120} x={80}>
        {renderTabCtx()}
      </Watermark>
    </div>
  )
}

export default MenuCtx