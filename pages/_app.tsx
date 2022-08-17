/* eslint-disable @typescript-eslint/ban-ts-comment */
import { useEffect, useMemo } from 'react'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material'
import theme from 'styles/theme'
import Head from 'next/head'
import TagManager from 'react-gtm-module'
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui'
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react'
import { getWallets } from '@open-sauce/solomon'
import { endpoint, network } from 'constants/environment'
import 'styles/app.scss'

function MyApp({ Component, pageProps }: AppProps) {
	const walletProviders = useMemo(() => getWallets(network), [])

	useEffect(() => {
		// initialize gtag analytics
		if (process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER) {
			TagManager.initialize({ gtmId: process.env.NEXT_PUBLIC_GOOGLE_TAG_MANAGER })
		}

		// Whenever user revisits the website, scroll to top of the page
		window.history.scrollRestoration = 'manual'
	}, [])

	return (
		<ThemeProvider theme={theme}>
			<ConnectionProvider endpoint={endpoint}>
				<WalletProvider wallets={walletProviders} autoConnect>
					<WalletDialogProvider featuredWallets={6}>
						<CssBaseline />

						<Head>
							<meta
								name='viewport'
								content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover'
							/>
							<title>Narentines NFT</title>
						</Head>

						<Component {...pageProps} />
					</WalletDialogProvider>
				</WalletProvider>
			</ConnectionProvider>
		</ThemeProvider>
	)
}

export default MyApp
