'use client'
import React from 'react'
import { Carousel,Typography, Button } from "@material-tailwind/react";

const carouselcontent = [
	{
		title: "Inspección de elementos",
		body: `Es una funcionalidad proporcionada por los navegadores web que permite a los desarrolladores web y diseñadores examinar y modificar el código HTML, CSS y JavaScript de una página web en tiempo real. 
		Esta herramienta es parte de las herramientas de desarrollo integradas en los navegadores modernos y es fundamental para el desarrollo web, la depuración y la optimización del rendimiento de sitios web.`,
		cover: "bg-wallpaper-ins",
	},
	{
		title: "Criptografía",
		body: `La criptografía es una disciplina que se encarga de proteger la información mediante técnicas que la convierten en un formato ilegible para aquellos que no tengan la clave necesaria para descifrarla. 
		Se utiliza en diversos campos como la seguridad informática, las comunicaciones, las transacciones financieras, entre otros, con el objetivo de garantizar la confidencialidad, integridad y autenticidad de los datos. 
		La criptografía se basa en algoritmos matemáticos y cifrados para codificar la información de manera segura y prevenir accesos no autorizados. Algunos ejemplos son Cipher Caesar, RSA, AES, Cipher Vigenere, entre otros.`,
		cover: "bg-wallpaper-crypto",
	},
	{
		title: "Hashing",
		body: `El hashing es un proceso matemático que convierte datos de cualquier tamaño en una cadena de longitud fija, generalmente más corta, que representa de manera única los datos originales. 
		Esta técnica se utiliza principalmente en criptografía y seguridad informática para verificar la integridad de los datos y para indexar y recuperar información de bases de datos de manera eficiente.
		Estos algoritmos son ampliamente utilizados en la verificación de contraseñas, la integridad de archivos, la autenticación de mensajes y en la creación de estructuras de datos eficientes como tablas hash. Los algoritmos de hashing más comunes incluyen MD5, SHA-1, SHA-256, entre otros. 
		`,
		cover: "bg-wallpaper-hash",
	},
	{
		title: "Esteganografía",
		body: `La esteganografía es una técnica que consiste en ocultar información dentro de otro mensaje u objeto físico para evitar su detección. Se puede utilizar para ocultar una amplia variedad de contenidos digitales, como texto, imágenes, videos o audios. 
		Esta práctica es fundamental en ciberseguridad, ya que grupos de ransomware y otras amenazas la emplean para esconder información al atacar un objetivo.  
		La esteganografía se diferencia de la criptografía en que no cambia el formato de la información, sino que oculta la existencia del mensaje, lo que la convierte en una herramienta valiosa para la comunicación encubierta.
		`,
		cover: "bg-wallpaper-steg",
	}
]

export default function LandingPage(){
    return (
		<div id="Conocimiento" className="flex flex-col h-screen">
			<h1 className='text-5xl text-semibold text-center m-8'> Algunos temas relacionados son :</h1>
			<Carousel className="rounded-xl" id=''>
				{carouselcontent.map(function(e,i){
					return(
						<div key={i} className={"relative h-full w-full bg-cover " + e.cover}>
							<div className="absolute inset-0 grid h-full w-full place-items-start bg-black/75">
								<div className="ml-8 p-12 w-3/5 text-start ">
									<Typography
									variant="h1"
									color="white"
									className="mb-4 text-3xl uppercase text-justify"
									>
										{e.title}
									</Typography>
									<Typography
									variant="lead"
									color="white"
									className="opacity-80 text-justify text-xl"
									>
										{e.body}
									</Typography>
									{/* <div className="flex justify-center gap-3">
									<Button size="sm" color="white" className="pt-2">
										Más información
									</Button>
									</div> */}
								</div>
							</div>
						</div>
					)
				})}
			</Carousel>
		</div>
				
    )
}