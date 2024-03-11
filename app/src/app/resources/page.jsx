import React, { Fragment } from 'react'
import Nabvar from '@/components/test/Nabvar'
import Footer from '@/components/test/Footer'
import Hero from '@/sections/resources/main/Hero'
import OptionBar from '@/sections/resources/main/OptionBar'

export default function page() {
  return (
	<Fragment>
		<Nabvar />
		<main className="flex min-h-screen flex-col items-center justify-evenly">
			<Hero/>
			<OptionBar/>
		</main>
		<Footer />
	</Fragment>
  )
}
