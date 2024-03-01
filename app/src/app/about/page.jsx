import React, { Fragment } from 'react'
import Footer from '@/components/test/Footer'
import Nabvar from '@/components/test/Nabvar'
import Hero from '@/sections/about/Hero'
import Info from '@/sections/about/Info'
import AboutJoinButton from '@/components/ui/buttons/AboutJoinButton'
import DownArrow from '@/components/ui/buttons/DownArrow'

export default function page() {
  return (
		<Fragment>
			<Nabvar />
			<main className="overflow-hidden px-12">
				<Hero/>
				<DownArrow/>		
				
				<Info />

				<AboutJoinButton/>
				<Footer />
			</main>
	</Fragment>
  )
}
