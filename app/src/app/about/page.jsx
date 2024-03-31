import React, { Fragment } from 'react'
import Footer from '@/components/test/Footer'
import Navigation from '@/components/ui/navs/Navigation'
import Hero from '@/sections/landing/Abot'
import Info from '@/sections/about/Info'
import AboutJoinButton from '@/components/ui/buttons/AboutJoinButton'
import DownArrow from '@/components/ui/buttons/DownArrow'

import { dashboardNav as navigation } from '@/data/navigation'
import Asociations from '@/sections/about/Asociations'
import { footNav } from '@/data/navigation'
export default function page() {
  return (
		<Fragment>
			<Navigation nav={navigation}/>
			<main className="overflow-hidden px-12">
				<Hero/>
				
				<Info />
				<Asociations/>
				<AboutJoinButton/>
				<Footer nav={footNav}/>
			</main>
	</Fragment>
  )
}
