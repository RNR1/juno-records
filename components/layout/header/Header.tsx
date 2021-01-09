import Image from 'next/image'
import styled from 'styled-components'
import config from 'config'
import Navbar from 'components/layout/Navbar'
import SearchBar from 'components/layout/search/SearchBar'
import searchTypes from 'data/searchTypes.json'
import { Logo, HamburgerIcon } from '.'

const Header = () => {
	// const smallScreen = width < 575
	// const midScreen = width >= 768
	// const largeScreen = width >= 1024
	return (
		<Container>
			<Content>
				<HeaderRow>
					<LogoStack>
						<HamburgerIcon />
						<Logo />
					</LogoStack>
					<SearchStack>
						<SearchBar siteTitle={config.title} searchFilters={searchTypes} />
						<Banner>
							<Image
								width={150}
								height={35}
								src='/banner.jpg'
								alt={config.title}
							/>
						</Banner>
						<OnMediumScreen>
							<Navbar

							// removeWishlist={smallScreen}
							/>
						</OnMediumScreen>
					</SearchStack>
				</HeaderRow>
				<OnLargeScreen>
					<HeaderRow>
						<Navbar />
					</HeaderRow>
				</OnLargeScreen>
			</Content>
		</Container>
	)
}

export default Header

const Container = styled.header`
	background-color: #2c495b;
	height: 50px;
	position: fixed;
	width: 100%;
	z-index: 0;

	@media (min-width: 1024px) {
		height: 90px;
	}
`

const Content = styled.div`
	display: flex;
	align-items: center;
	margin: 0 auto;
	max-width: 1320px;
	height: 100%;
	padding-left: 15px;
	padding-right: 15px;

	@media (max-width: 374px) {
		padding-left: 0;
		padding-right: 0;
		font-size: 0.9rem;
	}

	@media (min-width: 768px) {
		padding-left: 25px;
		padding-right: 25px;
	}

	@media (min-width: 1024px) {
		display: block;
		padding: 8px 40px;
	}

	@media (min-width: 1150px) {
		display: block;
	}
`

const HeaderRow = styled.div`
	display: flex;
	align-items: center;
	height: 100%;

	&:first-child {
		flex: 2;
	}

	&:last-child {
		flex: 3;
	}

	@media (min-width: 1024px) {
		justify-content: center;
		height: auto;
	}
`

const LogoStack = styled.div`
	height: 100%;
	display: flex;
	flex: 0.865;
	justify-content: flex-start;
	align-items: center;

	@media (min-width: 768px) {
		justify-content: flex-start;
	}

	@media (min-width: 1024px) {
		justify-content: flex-start;
	}
`

const SearchStack = styled.div`
	height: 100%;
	display: flex;
	flex: 1.1;
	align-content: center;
	justify-content: flex-end;

	@media (min-width: 1024px) {
		justify-content: flex-end;
	}
`

const Banner = styled.div`
	display: none;
	cursor: pointer;

	@media (min-width: 1024px) {
		display: flex;
		margin-left: 14px;
		align-self: center;
	}
`

const OnMediumScreen = styled.section`
	display: none;

	@media (max-width: 1024px) {
		display: flex;
	}
`

const OnLargeScreen = styled.section`
	display: none;

	@media (min-width: 1024px) {
		display: flex;
	}
`
