import styled from 'styled-components'
import verticalTabs from 'data/verticalTabs.json'
import VerticalTab from './VerticalTab'

const VerticalTabs = () => {
	return (
		<Tabs>
			{verticalTabs.map((tab) => (
				<VerticalTab
					key={tab.label}
					label={tab.label}
					color={tab.color}
					caret={tab.label !== 'dj'}
				/>
			))}
		</Tabs>
	)
}

export default VerticalTabs

const Tabs = styled.div`
	display: none;

	@media (min-width: 1024px) {
		display: flex;
		flex-direction: row-reverse;
		transform: rotate(-90deg);
		position: fixed;
		top: 450px;
		left: 0;
		z-index: 10;
		transform-origin: 0 0;
	}
`
