import { FC } from 'react'
import styled from 'styled-components'
import { categories, misc, account } from 'data/navbar.json'
import NavGroup from 'components/layout/navGroup/NavGroup'
import { Item } from './navGroup/NavItem'

const Navbar: FC = () => {
  return (
    <Container>
      <Categories items={categories as Item[]} chevron />
      <Misc items={misc as Item[]} />
      <Account responsiveItems items={account as Item[]} />
    </Container>
  )
}

export default Navbar

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  font-family: Arial, sans-serif;

  @media (max-width: 1023px) {
    display: flex;
    width: initial;
  }
`

const Categories = styled(NavGroup)`
  color: #fff;
  font-size: 16px;
  text-decoration: none;
  font-weight: 600;
  padding: 6px 10px;
  user-select: 'none';

  &:hover {
    background-color: #fff;
    color: #000;
    transition: all 0.2s ease;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`

const Misc = styled(NavGroup)`
  color: #efefef;
  font-size: 0.75rem;
  justify-self: flex-end;
  align-items: center;
  text-decoration: none;
  font-weight: 600;
  padding: 4px 10px;
  user-select: none;

  &:hover {
    background-color: #16252e;
    transition: background-color 0.2s ease;
  }

  @media (max-width: 1023px) {
    display: none;
  }
`

const Account = styled(NavGroup)`
  color: #efefef;
  font-size: 0.75rem;
  justify-self: flex-end;
  text-decoration: none;
  font-weight: 600;
  padding: 6px 10px;
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: #16252e;
    transition: background-color 0.2s ease;
  }

  @media (max-width: 1023px) {
    padding: 8px;
  }
`
