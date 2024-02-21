import React from 'react'
import Testing1 from '@/components/test/Testing1'

export default function page() {
  return (

    <div>
		<div className="sm:flex items-center max-w-screen-xl">
			<div className="sm:w-1/2 p-10">
				<div className="image object-center text-center">
					<img src="/grupo.svg" alt="" />
				</div>
			</div>
			<div className="sm:w-1/2 p-5">
				<div className="text">
					<span className="text-gray-500 border-b-2 border-indigo-600 uppercase">Sobre Nosotros</span>
					<h2 className="my-4 font-bold text-3xl  sm:text-4xl ">Sobre <span className="text-indigo-600">Nuestro Grupo Shell</span>
					</h2>
					<p class="text-gray-700">
						Somos un grupo de estudiantes apasionados y dedicados que hemos decidido aventurarnos en el fascinante mundo de la ciberseguridad. Procedentes de diversos orígenes académicos y experiencias, nos unimos bajo la bandera de la curiosidad y el deseo de aprender.
					</p>
				</div>
			</div>
    	</div>
			<Testing1 />
	</div>
	

  )
}
