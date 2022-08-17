import type { NextPage } from 'next'
import Navigation from 'components/layout/Navigation'
import TextImportant from 'components/TextImportant'
import Footer from 'components/layout/Footer'
import Main from 'components/layout/Main'
import { hashlist } from 'constants/environment'
import { HoldersOnly, NonHoldersOnly } from '@open-sauce/solomon'

const Home: NextPage = () => (
	<>
		<Navigation />

		{/* TODO: remove minHeight? */}
		<Main minHeight='70vh' m={4}>
			<HoldersOnly altChildren={'Forbidden holder'} hashlist={hashlist}>
				<TextImportant>Is holder</TextImportant>
			</HoldersOnly>
			<br />
			<NonHoldersOnly altChildren={'Is holder'} hashlist={hashlist}>
				<TextImportant>Forbidden holder</TextImportant>
			</NonHoldersOnly>
		</Main>

		<Footer />
	</>
)

export default Home
