import { FC } from 'react'
import Link from 'next/link'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import List from 'components/shared/List'
import genres from 'data/genres.json'
import useWindowWidth from 'hooks/useWindowWidth'
import useClickOutside from 'hooks/useClickOutside'
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
  hoverList?: string[]
}

export interface NavItemProps {
  chevron?: true
  item: Item
  responsive?: boolean
  className?: string
}

const NavItem: FC<NavItemProps> = ({
  chevron,
  children,
  item: { icon, iconColor, iso, label, status, short, to, hoverList },
  responsive,
  ...linkProps
}) => {
  const width = useWindowWidth()
  const largeScreen = width >= 1024 || !responsive
  const smallScreen = width < 575
  const { ref, open, toggle } = useClickOutside()

  if (smallScreen && label === 'Wishlist') return null
  return (
    <Wrapper ref={ref} hasHover={hoverList?.length! > 0}>
      <Link href={to}>
        <Container onClick={toggle} {...linkProps}>
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
      {open && hoverList && (
        <ListStack>
          <CustomList>
            {hoverList.map(item => (
              <ItemStack key={item}>
                <ListItem>{item}</ListItem>
                <FontAwesomeIcon icon='angle-right' size='sm' />
              </ItemStack>
            ))}
          </CustomList>
          <CustomList>
            {genres.map(genre => (
              <div key={genre.label}>
                <InnerItemStack>
                  <ListItem>{genre.label}</ListItem>
                  {genre.subGenres.length > 0 && (
                    <FontAwesomeIcon icon='angle-right' size='sm' />
                  )}
                </InnerItemStack>
              </div>
            ))}
          </CustomList>
        </ListStack>
      )}
    </Wrapper>
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

const Wrapper = styled.div<{ hasHover?: boolean }>`
  display: ${({ hasHover }) => (hasHover ? 'block' : 'inherit')};
  z-index: ${({ hasHover }) => (hasHover ? '5' : '1')};
`

const Container = styled.a`
  cursor: pointer;
`

const CustomList = styled(List)`
  position: relative;
`

const ListStack = styled.div`
  display: flex;
  position: absolute;
`

const ItemStack = styled.div`
  padding: 0 1rem;
  width: 100%;
  display: flex;
  width: 209px;
  justify-content: space-between;
  align-items: center;
  color: #4a95c1;

  &:hover {
    background-color: #4a95c1;
    color: white;
  }
`

const ListItem = styled.li`
  font-size: 0.85rem;
  padding: 0 0.2rem;
  cursor: pointer;
`

const InnerItemStack = styled(ItemStack)`
  color: black;

  &:hover {
    background-color: grey;
    color: white;
  }
`
