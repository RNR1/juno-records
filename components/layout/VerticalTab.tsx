import { FC, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import Link from 'next/link'
import useClickOutside from 'hooks/useClickOutside'
import SecureStatement from './secureStatement/SecureStatement'
import SecureIcon from './secureStatement/secureIcon/SecureIcon'

interface TabContent {
	title: string
	description: string
	action: string
}

interface Props {
	label: string
	color: string
	caret: boolean
	to: string
	content: TabContent
}

const VerticalTab: FC<Props> = ({
	label,
	color = '#000',
	caret = false,
	to,
	content
}) => {
	const { ref, toggle, open } = useClickOutside('mousemove')

	return (
		<Container ref={ref} open={open}>
			<Box>
				<TitleStack>
					<Title>{content.title}</Title>
					<Statement>
						<SecureIcon />
						100% Secure Shipping
					</Statement>
				</TitleStack>
				<Description>{content.description}</Description>
				<Link href={to}>
					<Action>{content.action}</Action>
				</Link>
			</Box>
			<Handle style={{ background: color }}>
				<HandleContent>
					<Link href={to}>
						<Label>
							<strong>juno</strong>
							{label}
						</Label>
					</Link>
					<Caret
						$isVisible={caret}
						icon='caret-down'
						color='white'
						size='xs'
						open={open}
						onClick={toggle}
					/>
				</HandleContent>
			</Handle>
		</Container>
	)
}

export default VerticalTab

const Container = styled.div<{ open: boolean }>`
	height: 120px;
	display: flex;
	transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-74%)')};
	transition: transform 0.7s;
`

const Box = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 450px;
	background: white;
	box-shadow: 0 0 9px -4px #000;
`

const Handle = styled.div`
	width: 120px;
	height: 30px;
	padding: 0px 15px;
	box-shadow: 0 0 11px -4px #000;
	align-self: flex-end;
	transform: rotate(-90deg);
	transform-origin: 0 30px 0px;
	cursor: pointer;
`

const HandleContent = styled.span`
	display: flex;
	justify-content: space-around;
	align-items: center;
	padding: 2px 5px;
	font-size: 0.9rem;
`

const Label = styled.a`
	color: white;
	text-decoration: none;
`

const Caret = styled(FontAwesomeIcon)<{ open: boolean; $isVisible: boolean }>`
	transform: rotate(${({ open }) => (open ? '180deg' : 0)});
	transition: transform 0.5s;
	cursor: e-resize;
	margin: 0 0 0 5px;
	visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
`

const TitleStack = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 90%;
	height: 100%;
	line-height: 1;
`

const Title = styled.h5`
	padding: 0 0.5rem;
	color: #4a95c1;
`

const Description = styled.p`
	font-size: 0.7rem;
	margin: 0;
	width: 90%;
	padding: 0.5rem;
	margin-block-start: 0;
	margin-block-end: 0;
	line-height: 1.2;
`

const Action = styled.a`
	color: black;
	font-size: 0.7rem;
	text-decoration: underline;
	padding: 0 0.5rem;
	cursor: pointer;
`

const Statement = styled.p`
	align-self: center;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-family: Arial, Helvetica, sans-serif;
	font-size: 0.85rem;
	color: black;
	margin-block-start: 0;
	margin-block-end: 0;
`
