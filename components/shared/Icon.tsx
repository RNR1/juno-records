import React, { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Item, NavItemProps } from 'components/layout/navGroup/NavItem'

interface Props extends NavItemProps {
	color: string
	item: Item & { to: string }
}

const Icon: FC<Props> = ({
	item: { icon, iconColor, to },
	color = '#fff',
	...props
}) => {
	return (
		<a href={to} {...props}>
			<FontAwesomeIcon icon={icon} color={iconColor || color} />
		</a>
	)
}

export default Icon
