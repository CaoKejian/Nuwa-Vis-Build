import React, { memo } from 'react'
import type { FC, ReactNode } from 'react'
interface IProps {
  children?: ReactNode
}

const MySelf: FC<IProps> = () => {
  return (
    <div>MySelf
    </div>
  )
}

export default memo(MySelf)