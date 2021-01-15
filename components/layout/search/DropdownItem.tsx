import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

export interface Item {
  id: string
  value: string
  label: string
}

interface Props {
  item: Item
  selected: boolean
  selectItem: (item: Item) => void
}

const DropdownItem: FC<Props> = ({ item, selected, selectItem, ...props }) => {
  return (
    <Container onClick={() => selectItem(item)} {...props}>
      <span>{item.label}</span>
      {selected && (
        <span>
          <FontAwesomeIcon icon={faCheck} />
        </span>
      )}
    </Container>
  )
}

export default DropdownItem

const Container = styled.li`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 0.8em;
  padding: 2px 20px;

  &:hover {
    background-color: #efefef;
  }

  &:active {
    color: white;
    background-color: #4a95c1;
  }
`
