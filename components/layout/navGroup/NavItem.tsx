import { FC } from 'react'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import useWindowWidth from 'hooks/useWindowWidth'
import styled from 'styled-components'
import Link from 'next/link'
import FlagIcon from './FlagIcon'
import StatusIndicator from './StatusIndicator'

export interface Item {
  icon?: IconProp | string | string[]
  iconColor?: string
  iso?: string
  label: string
  status?: 'online' | 'n/a' | 'offline'
  short?: string
  to: string
}

export interface NavItemProps {
  chevron?: true
  item: Item
  responsive?: boolean
  className?: string
}

const NavItem: FC<NavItemProps> = ({
  chevron,
  item: { icon, iconColor, iso, label, status, short, to },
  responsive,
  ...linkProps
}) => {
  const width = useWindowWidth()
  const largeScreen = width >= 1024 || !responsive

  return (
    <Link href={to}>
      <Container {...linkProps}>
        {iso && <FlagIcon iso={iso} />}
        {icon && (
          <FontAwesomeIcon
            icon={icon as IconProp}
            color={iconColor}
            size={largeScreen ? 'sm' : 'lg'}
            style={{ marginRight: 5 }}
          />
        )}
        <span>
          {largeScreen ? label : short}
          {chevron && <Chevron />}
        </span>
        {status && <StatusIndicator status={status} />}
      </Container>
    </Link>
  )
}

export default NavItem

const Chevron = () => (
  <FontAwesomeIcon
    icon={faCaretDown}
    fontSize={12}
    style={{ height: 16, marginLeft: 5 }}
  />
)

const Container = styled.a`
  cursor: pointer;
`
