import { getPhotoID } from '@/_backend/lib/api/src/graphql/queries'
import { withAuthenticator } from '@aws-amplify/ui-react'
import { generateClient } from 'aws-amplify/api'
import { useEffect } from 'react'

function Home() {
	const client = generateClient({})
	useEffect(() => {
		client
			.graphql({
				query: getPhotoID,
				variables: {
					id: 'c564e16e-d208-45bc-b137-d13cc0d1f466',
				},
			})
			.then((res) => {
				console.log(res.data)
			})
	}, [])
	return <main>Home Page</main>
}

export default withAuthenticator(Home)
