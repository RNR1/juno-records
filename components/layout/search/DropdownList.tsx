import { FC } from 'react'
import styled from 'styled-components'
import { Item } from './Dropdown'
import DropdownItem from './DropdownItem'

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
	selectItem
}) => {
	return (
		<List>
			{items.map((item) => (
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

const List = styled.ul`
	list-style: none;
	list-style-position: inside;
	background-color: white;
	padding: 7px 0;
	margin: 3px 0;
	color: #000;
	box-shadow: 0 0 1px black;
	position: fixed;
	z-index: 1;
`
