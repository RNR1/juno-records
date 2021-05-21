import { FC, useState } from 'react'
import styled from 'styled-components'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import data from 'data/navbar.json'
import Dropdown, { SearchProps } from 'components/layout/search/Dropdown'
import NavItem from 'components/layout/navGroup/NavItem'

/** @flow */
/**
 * Search bar with a build-in filters dropdown.
 * @name SearchBar
 * @param {string} siteTitle
 * @param {[]} searchFilters
 * @param {bool} multiSelect
 * @param {string} filtersLabel
 * @example
 *  <SearchBar siteTitle="My App" searchFilters={[{ id: 'all', value: 'all', label: 'All' }]} />
 */

const SearchBar: FC<SearchProps> = ({
  siteTitle = '',
  searchFilters = [],
  multiSelect = false,
  filtersLabel = 'Filters',
}) => {
  const [searchValue, setSearchValue] = useState<string>('')
  const { search } = data
  return (
    <>
      <OnMediumScreen>
        <NavItem item={search} responsive />
      </OnMediumScreen>
      <Container>
        <Dropdown
          label={filtersLabel}
          items={searchFilters}
          multiSelect={multiSelect}
        />
        <Input
          type='text'
          placeholder={`Search ${siteTitle}...`}
          aria-label='search'
          value={searchValue}
          onChange={({ target: { value } }) => setSearchValue(value)}
        />
        <Button role='button'>
          <SearchIcon />
        </Button>
      </Container>
    </>
  )
}

export default SearchBar

const SearchIcon = () => (
  <FontAwesomeIcon
    icon={faSearch}
    style={{ fontSize: '0.8rem', color: '#fff' }}
  />
)

const Container = styled.div`
  @media (max-width: 768px) {
    display: none;
  }

  display: flex;
  max-width: 537px;
  flex-basis: auto;
  justify-content: flex-end;
  align-items: center;
  font-family: Arial, sans-serif;

  @media (min-width: 1024px) {
    flex-grow: 1;
  }
`

const Input = styled.input`
  flex-grow: 0;
  flex-shrink: 1;
  flex-basis: auto;
  width: 150px;
  background-color: white;
  height: 35px;
  padding: 0 10px;
  font-size: 15px;
  user-select: none;
  border-style: none;

  @media (min-width: 1024px) {
    flex-grow: 1;
    max-width: 150px;
    width: auto;
  }

  @media (min-width: 1150px) {
    flex-grow: 1;
    max-width: none;
    min-width: 300px;
    width: auto;
  }
`

const Button = styled.div`
  flex-shrink: 0;
  background-color: #4a95c1;
  width: 40px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  &:active {
    margin-top: 2px;
  }

  &:hover {
    opacity: 0.7;
    transition: 0.5s opacity;
  }
`

const OnMediumScreen = styled.section`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    color: #fff;
    font-size: 0.8rem;
    align-items: center;
    padding: 8px;

    &:hover {
      background-color: #16252e;
      transition: background-color 0.2s ease;
    }
  }
`
