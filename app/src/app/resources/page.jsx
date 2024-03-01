import React, { Fragment } from 'react'
import { data } from '@/components/data/data'
import Nabvar from '@/components/test/Nabvar'
import Footer from '@/components/test/Footer'
import { resources } from '@/components/data/data'
import Link from 'next/link'
import VibringContainer from '@/components/ui/containers/VibringContainer'

export default function page() {
  return (
	<Fragment>
		<Nabvar />
		<main className="flex min-h-screen flex-col items-center justify-evenly">
			<div className="relative h-96 w-full">
				<img src="/anime.jpg" alt="fondo" class="absolute inset-0 w-full h-full object-cover filter blur-sm"/>
				<div class="absolute inset-0 bg-black bg-opacity-50"></div>
				<div class="absolute inset-0 flex flex-col items-center justify-center">
					<h1 class="text-4xl text-white font-bold">UNSA Ethical Hackers Association (UEHA)</h1>
					<p class="text-xl text-white mt-4">¿Que deseas aprender hoy?</p>
				</div>
			</div>
			
			<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4 pt-10">
				{resources.nav.map(function(e,i){
					return (
					<Link
						key={i}
						href={e.href}
						img={e.img}
						className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
						rel="noopener noreferrer"
					>	
						<img src={e.img} alt="" className="w-96 h-40 rounded-lg"/>
						<h2 className="mb-3 text-2xl font-bold text-center pt-4 uppercase">
						{e.title}
						</h2>
						{/* <p className="m-0 max-w-[30ch] text-sm opacity-50">
						XD
						{e.desc}
						</p> */}
					</Link>
					)
				})}
			</div>
			<Footer />
		</main>
	</Fragment>
  )
}
