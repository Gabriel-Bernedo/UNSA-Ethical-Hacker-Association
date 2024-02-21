import React from "react";

export default function Testing1() {
  return (
    <div className="relative mx-auto max-w-7xl z-10 grid grid-cols-1 gap-10 pt-14 sm:grid-cols-2 lg:grid-cols-3">
		<div>
			<article className="relative overflow-visible rounded-lg shadow transition hover:shadow-lg">
				<img className="absolute inset-0 h-full w-full object-cover" src="prueba.jpeg" alt="" />
				<div className="relative rounded-e-2xl bg-gradient-to-t from-gray-900/50 from-gray-900/25  pt-32 sm:pt-48 lg:pt-40">
					<div className="p-4 sm:p-6">
						<h3 className="mt-0.5 text-lg text-white font-bold">Nuestra Pasìon:</h3>
						<p className="mt-2 line-clamp-10 text-sm/relaxed text-stone-300 text-justify">
							La ciberseguridad no es solo una disciplina para nosotros; es una
							pasión que impulsa cada uno de nuestros pasos. Nos emociona explorar
							los entresijos de la seguridad digital, comprender las amenazas
							emergentes y desarrollar habilidades que nos permitan proteger
							sistemas y datos vitales en un mundo cada vez más interconectado.
						</p>
					</div>
				</div>
			</article>
		</div>

		<div>
			<article className="relative overflow-visible rounded-lg shadow transition hover:shadow-lg">
				<img className="absolute inset-0 h-full w-full object-cover" src="/prueba.jpeg" alt="" />
				<div className="relative bg-gradient-to-t from-gray-900/50 from-gray-900/25  pt-32 sm:pt-48 lg:pt-40">
					<div className="p-4 sm:p-6">
					<h3 className="mt-0.5 text-lg text-white font-bold">Nuestra Objetivo:</h3>
					<p className="mt-2 line-clamp-10 text-sm/relaxed text-stone-300 text-justify" >
						En el Grupo Shell, creemos en el poder del aprendizaje continuo. Nos
						esforzamos por adquirir nuevos conocimientos, dominar herramientas y
						técnicas, y compartir nuestras experiencias.
						Nuestro objetivo es no solo mejorar nuestras habilidades individuales,
						sino también fomentar un ambiente de colaboración donde todos puedan
						crecer juntos.
					</p>
					</div>
				</div>
			</article>
		</div>

		<div>
			<article className="relative overflow-visible rounded-lg shadow transition hover:shadow-lg">
				<img className="absolute inset-0 h-full w-full object-cover" src="/prueba.jpeg" alt="" />
				<div className="relative bg-gradient-to-t from-gray-900/50 from-gray-900/25  pt-32 sm:pt-48 lg:pt-40">
					<div className="p-4 sm:p-6">
					<h3 className="mt-0.5 text-lg text-white font-bold">Nuestra Mision:</h3>
					<p className="mt-2 line-clamp-10 text-sm/relaxed text-stone-300 text-justify">
						Como estudiantes en el campo de la ciberseguridad, estamos comprometidos
						a estar en la vanguardia de la protección digital. Buscamos identificar
						y abordar las últimas amenazas y vulnerabilidades, desarrollar
						soluciones innovadoras y promover prácticas de seguridad sólidas en
						todos los aspectos de la vida digital, y participar en respectivos 
						eventos CTF.
					</p>
					</div>
				</div>
			</article>
		</div>
    </div>
  );
}
