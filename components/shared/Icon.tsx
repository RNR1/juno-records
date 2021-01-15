import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item, NavItemProps } from 'components/layout/navGroup/NavItem'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

export interface IconProps extends NavItemProps {
  color?: string
  item: Item & { to: string }
}

const Icon: FC<IconProps> = ({
  item: { icon, iconColor, to },
  color = '#fff',
  ...props
}) => {
  return (
    <a href={to} {...props}>
      <FontAwesomeIcon icon={icon as IconProp} color={iconColor || color} />
    </a>
  )
}

export default Icon
