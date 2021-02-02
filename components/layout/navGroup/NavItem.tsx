import { FC, useRef, useState } from 'react'
import Link from 'next/link'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styled, { css, keyframes } from 'styled-components'
import List from 'components/shared/List'
import genres from 'data/genres.json'
import useWindowWidth from 'hooks/useWindowWidth'

import FlagIcon from './FlagIcon'
import StatusIndicator from './StatusIndicator'

interface Selection {
  label: string
  position: string
  width: number
  href: string
}

export interface Item {
  icon?: IconProp | string | string[]
  iconColor?: string
  iso?: string
  label: string
  status?: 'online' | 'n/a' | 'offline'
  short?: string
  to: string
  hoverList?: { label: string; selection: Selection[] }[]
  gridList?: { label: string; position: string; width: number }[]
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
  item: { icon, iconColor, iso, label, status, short, to, hoverList, gridList },
  responsive,
  ...linkProps
}) => {
  const width = useWindowWidth()
  const largeScreen = width >= 1024 || !responsive
  const smallScreen = width < 575
  const [open, setIsOpen] = useState<boolean>()
  const wrapperRef = useRef<HTMLDivElement | null>(null)
  const [selection, setSelection] = useState<Selection[]>(
    hoverList?.[0].selection || []
  )

  if (smallScreen && label === 'Wishlist') return null
  return (
    <Wrapper
      ref={wrapperRef}
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      hasHover={hoverList?.length! > 0 && open}
    >
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
      {open && hoverList && (
        <HoverMenu onMouseLeave={() => setIsOpen(false)}>
          {gridList && (
            <GridList $columns={5} $item={150} $width={750}>
              {gridList.map(item => (
                <GridListItem key={item.label}>
                  <GridImage $position={item.position} $width={item.width} />
                  {item.label}
                </GridListItem>
              ))}
            </GridList>
          )}
          <ListStack>
            <CustomList>
              {hoverList.map(item => (
                <ItemStack
                  onMouseEnter={() => setSelection(item.selection)}
                  key={item.label}
                >
                  <ListItem>{item.label}</ListItem>
                  <FontAwesomeIcon icon='angle-right' size='sm' />
                </ItemStack>
              ))}
            </CustomList>
            <CustomList>
              {selection && (
                <GridList $noShadow $columns={3} $item={156.8} $width={470}>
                  {selection?.map(item => (
                    <GridListItem key={item.label}>
                      <GridImage
                        $height={50}
                        $position={item.position}
                        $width={item.width}
                      />
                      {item.label}
                    </GridListItem>
                  ))}
                </GridList>
              )}
              {label === 'Music' &&
                genres.map(genre => (
                  <div key={genre.label}>
                    <InnerItemStack>
                      <ListItem>{genre.label}</ListItem>
                      {genre.subGenres.length > 0 && (
                        <FontAwesomeIcon
                          color='#4a95c1'
                          icon='angle-right'
                          size='sm'
                        />
                      )}
                    </InnerItemStack>
                  </div>
                ))}
            </CustomList>
          </ListStack>
        </HoverMenu>
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

  &:hover {
  }
`

const CustomList = styled(List)`
  position: relative;
  margin: 0;
  padding: 0;
`

const ListStack = styled.div`
  display: flex;
`

const ItemStack = styled.div`
  padding: 0 1rem;
  width: 100%;
  display: flex;
  min-width: 260px;
  justify-content: space-between;
  align-items: center;
  color: #4a95c1;

  &:hover {
    background-color: #4a95c1;
    color: white;
  }
`

const ListItem = styled.li`
  font-size: 0.8rem;
  padding: 0 0.2rem;
  cursor: pointer;
`

const InnerItemStack = styled(ItemStack)`
  color: black;

  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
    color: black;
  }
`

const fade = keyframes`
  0% {
    opacity: 0;
  } 
  100% {
    opacity: 1;
  }
`

const GridList = styled(List)<{
  $columns: number
  $item: number
  $width: number
  $noShadow?: true
}>`
  ${({ $noShadow }) =>
    $noShadow &&
    css`
      box-shadow: none;
    `}
  position: static;
  display: grid;
  grid-template-columns: ${({ $item, $columns }) =>
    `repeat(${$columns}, ${$item}px)`};
  grid-template-rows: auto;
  margin: 0;
  padding: 0;
  animation-duration: 0.3s;
  animation-name: ${fade};
  animation-iteration-count: 1;
  animation-direction: alternate;
`

const GridListItem = styled.li`
  display: block;
  padding: 15px 0 5px 0;
  text-align: center;
  font-size: 0.8rem;
  width: 150px;
  animation-duration: 0.4s;
  animation-name: ${fade};
  animation-iteration-count: 1;
  animation-direction: alternate;

  &:hover {
    background-color: rgba(128, 128, 128, 0.2);
    cursor: pointer;
  }
`

const GridImage = styled.div<{
  $position: string
  $width: number
  $height?: number
}>`
  background-image: url('https://wwwcdn.juno.co.uk/12090200/images/jr-sprite-nav.png');
  display: block;
  height: ${({ $height = 60 }) => $height}px;
  margin: 0 auto 7px auto;
  background-position: ${({ $position }) => $position};
  width: ${({ $width }) => $width}px;
`

const HoverMenu = styled.div`
  position: absolute;
`
