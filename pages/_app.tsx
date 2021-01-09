import { FC } from 'react'
import { AppProps } from 'next/app'
import GlobalStyle from 'styles/GlobalStyle'
import 'flag-icon-css/css/flag-icon.css'
import 'config/faLibrary'
import Layout from 'components/layout/Layout'

const MyApp: FC<AppProps> = ({ Component, pageProps }) => {
	return (
		<>
			<GlobalStyle />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	)
}

export default MyApp
