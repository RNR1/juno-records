import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'

interface Props {
	label: string
	color: string
	caret: boolean
}

const VerticalTab: FC<Props> = ({ label, color = '#000', caret = false }) => {
	return (
		<Container style={{ background: color }}>
			<Label>
				<strong>juno</strong>
				{label}
			</Label>
			{caret && (
				<Caret>
					<FontAwesomeIcon icon='caret-down' color='white' size='xs' />
				</Caret>
			)}
		</Container>
	)
}

export default VerticalTab

const Container = styled.div`
	display: flex;
	box-shadow: 0 0 11px -4px #000;
	padding: 2px 10px;
	margin-right: 10px;
`

const Label = styled.span`
	font-size: 0.9rem;
	color: white;
`

const Caret = styled.span`
	cursor: e-resize;
	margin: 0 0 0 10px;
`
