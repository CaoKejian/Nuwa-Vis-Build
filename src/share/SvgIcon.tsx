import React, { FC } from 'react'
import './SvgIcon.less'

interface SvgIconProps {
  svgName: string;
  svgClass?: string;
  color?: string;
}

const SvgIcon: FC<SvgIconProps> = (props) => {
  const { svgName, color, svgClass } = props
  return (
    <svg className={`svg-class ${svgClass}`}>
      <use xlinkHref={'#icon-' + svgName} fill={color} />
    </svg>
  )
}

export default SvgIcon

