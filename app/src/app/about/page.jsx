import React from 'react'
import Testing1 from '@/components/test/Testing1'

import Footer from '@/components/test/Footer'
import Nabvar from '@/components/test/Nabvar'
import VibringContainer from '@/components/ui/containers/VibringContainer'

export default function page() {
  return (

    <div>
		<Nabvar />
		<div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">

		<VibringContainer>
			<div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 lg:m-16">

				<div className="sm:w-1/1 p-5">
					<div className="text">
						<span className="text-gray-500 border-b-2 border-indigo-600 uppercase">Sobre Nosotros</span>
						<h2 className="my-4 font-bold text-3xl  sm:text-5xl ">Sobre <span className="text-indigo-600">Nuestro Grupo Shell</span>
						</h2>
						<p class="text-gray-700 text-justify text-2xl">
							Somos un grupo de estudiantes apasionados y dedicados que hemos decidido aventurarnos en el fascinante mundo de la ciberseguridad. Procedentes de diversos orígenes académicos y experiencias, nos unimos bajo la bandera de la curiosidad y el deseo de aprender.
						</p>
					</div>
				</div>
				<div class="mt-12 md:mt-0">
					<img className="object-cover rounded-lg dark:drop-shadow-bitDark drop-shadow-bitLight" src="/file.png" alt="" />
				</div>
			</div>			
		</VibringContainer>
			<Testing1 />
		<div className="mt-12 flex items-center justify-center gap-x-6">
			<button type="button" className="text-md relative inline-flex items-center gap-x-2 rounded-lg bg-indigo-800 px-6 py-4 font-semibold text-white shadow-sm hover:bg-teal-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">
			Join Now
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="-mr-0.5 h-5 w-5">
				<path fill-rule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clip-rule="evenodd"></path>
			</svg>
        </button>
      </div>
	  <div>
		<Footer />
	  </div>
	</div>
  )
}
