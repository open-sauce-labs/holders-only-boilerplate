import { WalletAdapterNetwork } from '@solana/wallet-adapter-base'
import { clusterApiUrl } from '@solana/web3.js'

// TODO: validate all .env variables

// RPC Node Endpoint
export const endpoint = (process.env.NEXT_PUBLIC_SOLANA_RPC_NODE_ENDPOINT as string) || clusterApiUrl('devnet')
export const network = (process.env.NEXT_PUBLIC_SOLANA_CLUSTER as WalletAdapterNetwork) || WalletAdapterNetwork.Devnet
// export const connection = new Connection(endpoint)

// Collection hashlist
export const hashlist = [
	'HUXypHtrwM271dCL7CfoSb1ymMA5c9X5Ra6pGSEXUWV2',
	'vbrnDU1rWqDaCdgihGiiFFXyt68e2v6GUUzT8zegdh6',
	'F8uaQiJb3G2qYEuWGg6XAFX4SEiZ6STpXmPNQCPaLjmn',
]
