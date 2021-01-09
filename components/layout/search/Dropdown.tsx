import { FC, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'
import useClickOutside from 'hooks/useClickOutside'
import DropdownList from './DropdownList'

export interface Item {
	id: string
	value: string
	label: string
}

interface Props {
	label: string
	items: Item[]
	multiSelect: boolean
}

const Dropdown: FC<Props> = ({
	label = 'Select',
	items = [],
	multiSelect = false
}) => {
	const { ref, open, toggle } = useClickOutside()
	const [selection, setSelection] = useState<Item[]>([])

	const selectItem = (item: Item) => {
		if (isItemInSelection(item))
			return setSelection(selection.filter((current) => current.id !== item.id))

		if (multiSelect) return setSelection([...selection, item])

		setSelection([item])
		toggle()
	}

	const isItemInSelection = (item: Item) => {
		return selection.some((current) => current.id === item.id)
	}

	const currentSelection = () => {
		if (multiSelect) return label
		if (selection.length) return selection[0].label
		return items?.[0].label || label
	}

	return (
		<div ref={ref}>
			<Container
				tabIndex={0}
				role='button'
				onKeyPress={toggle}
				onClick={toggle}>
				{currentSelection()}
				<Caret />
			</Container>
			{open && (
				<DropdownList
					items={items}
					multiSelect={multiSelect}
					isItemInSelection={isItemInSelection}
					selectItem={selectItem}
				/>
			)}
		</div>
	)
}

const Caret = styled(() => <FontAwesomeIcon icon={faCaretDown} size='sm' />)`
	position: relative;
	top: -4;
	margin-left: 4;
`

export default Dropdown

const Container = styled.div`
	display: flex;
	align-items: center;
	height: 35px;
	width: max-content;
	padding: 0 13px;
	font-size: 15px;
	background-color: #e7e7e1;
	cursor: pointer;
	color: #000;
	user-select: none;

	&:active {
		margin-top: 2px;
	}

	&:hover {
		opacity: 0.7;
		transition: 0.5s opacity;
	}
`
