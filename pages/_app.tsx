import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Amplify } from 'aws-amplify'
import '@aws-amplify/ui-react/styles.css'
import { config } from '@/awsconfig'

Amplify.configure(config)

export default function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Component {...pageProps} />
		</>
	)
}
