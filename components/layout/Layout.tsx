import { FC } from 'react'
import styled from 'styled-components'
import { Header, VerticalTabs, Footer } from '.'

const Layout: FC = ({ children }) => {
	return (
		<Container>
			<VerticalTabs />
			<Header />
			<Main>
				<main>{children}</main>
			</Main>
			<Footer />
		</Container>
	)
}

export default Layout

const Container = styled.div`
	position: relative;
	display: flex;
	min-height: 100vh;
	flex-direction: column;
`

const Main = styled.main`
	margin: 100px auto;
	max-width: 1320px;
	flex: 1;
`
