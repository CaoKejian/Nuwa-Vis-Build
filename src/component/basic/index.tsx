import React, { FC } from "react"
import * as s from './index.module.less'

const Basic: FC = () => { 
  return (
    <div className={s.wrapper}>
      <div className={s.left}>
        <div className={s.phone}>
          <div className={s.content}>
            <img src="https://gd-hbimg.huaban.com/4533f7b3c3a2daba830b35730b299228d0f7900017687e-gQmslT_fw236" alt="" />
          </div>
        </div>
      </div>
      <div className={s.right}></div>
    </div>
  )
}

export default Basic