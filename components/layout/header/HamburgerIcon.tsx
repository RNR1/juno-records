import { FC } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface Props {
	onClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const HamburgerIcon: FC<Props> = ({ onClick }) => {
	return (
		<Container onClick={onClick}>
			<FontAwesomeIcon icon='bars' size='lg' />
		</Container>
	)
}

export default HamburgerIcon

const Container = styled.div`
	@media (min-width: 1024px) {
		display: none;
	}

	color: white;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 8px 0 8px;

	@media (max-width: 374px) {
		margin: 0 6px 0 12px;
	}

	&:hover {
		color: #16252e;
		z-index: 0;
		transition: color 0.3s ease-in-out;
	}
`
