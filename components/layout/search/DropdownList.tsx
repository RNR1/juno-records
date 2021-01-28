import List from 'components/shared/List'
import { FC } from 'react'
import DropdownItem, { Item } from './DropdownItem'

interface Props {
  items: Item[]
  multiSelect: boolean
  isItemInSelection: (item: Item) => boolean
  selectItem: (item: Item) => void
}

const DropdownList: FC<Props> = ({
  items,
  multiSelect,
  isItemInSelection,
  selectItem,
}) => {
  return (
    <List>
      {items.map(item => (
        <DropdownItem
          key={item.id}
          item={item}
          selected={multiSelect && isItemInSelection(item)}
          selectItem={selectItem}
        />
      ))}
    </List>
  )
}

export default DropdownList
