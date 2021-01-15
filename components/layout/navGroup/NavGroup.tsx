import { IconProps } from 'components/shared/Icon'
import { FC } from 'react'
import styled from 'styled-components'
import NavItem, { Item as IItem, NavItemProps } from './NavItem'

/** @flow */
/**
 * A flexible navigation group component which accepts a group of items and displays them accordingly
 * @name NavGroup
 * @param {string} title
 * @param {[]} items
 * @param {ReactElement} Item
 * @param {string} direction
 * @param {bool} responsiveItems
 * @example
 *  <NavGroup items={[{ label: "Music", short: "Music", to: "/" }]} chevron />
 */

interface Props {
  title?: string
  items?: IItem[]
  Item?: FC<NavItemProps> | FC<IconProps>
  direction?: 'row' | 'column'
  responsiveItems?: true
  chevron?: true
  color?: string
}
const NavGroup: FC<Props> = ({
  title,
  items = [],
  Item = NavItem,
  direction = 'row',
  responsiveItems = false,
  children,
  ...props
}) => {
  if (children) return <Container $direction={direction}>{children}</Container>
  return (
    <Container $direction={direction}>
      {title && <Title>{title}</Title>}
      {items &&
        items.map(item => (
          <Item
            key={item.label}
            item={item}
            responsive={Item === NavItem && responsiveItems ? true : undefined}
            {...props}
          />
        ))}
    </Container>
  )
}

export default NavGroup

const Container = styled.div<{ $direction: 'row' | 'column' }>`
  display: flex;
  flex-direction: ${({ $direction }) => $direction};
  align-items: ${({ $direction }) =>
    $direction === 'row' ? 'center' : 'start'};
  height: 100%;
`

const Title = styled.h5`
  color: #fff;
  font-family: Arial, sans-serif;
  font-weight: 600;
  font-size: 1.05rem;
  line-height: 2;
  text-align: start;
  width: 100%;
`
