'use client'
import React from 'react'
import { Carousel,Typography, Button } from "@material-tailwind/react";

export default function LandingPage(){
    return (
		<div id="Conocimiento" className="p-5 flex justify-center">
			<Carousel className="rounded-xl w-3/4">
				<div className="relative h-full w-full">
					<img src="./criptografia.webp" alt="image 1" className="h-[580px] w-full object-cover"/>
					<div className="absolute inset-0 grid h-full w-full place-items-start bg-black/75">
					<div className="p-8 pl-5 mb-20 w-1/2 text-start ">
						<Typography
						variant="h1"
						color="white"
						className="mb-4 text-3xl uppercase text-justify"
						>
						Criptografía
						</Typography>
						<Typography
						variant="lead"
						color="white"
						className="mb-12 opacity-80 text-justify text-xl"
						>
						La criptografía es una disciplina que se encarga de proteger la información mediante técnicas que la convierten en un formato ilegible para aquellos que no tengan la clave necesaria para descifrarla. <br/>
						Se utiliza en diversos campos como la seguridad informática, las comunicaciones, las transacciones financieras, entre otros, con el objetivo de garantizar la confidencialidad, integridad y autenticidad de los datos. <br />
						La criptografía se basa en algoritmos matemáticos y cifrados para codificar la información de manera segura y prevenir accesos no autorizados.
						</Typography>
						{/* <div className="flex justify-center gap-3">
						<Button size="sm" color="white" className="pt-2">
							Más información
						</Button>
						</div> */}
					</div>
					</div>
				</div>
				<div className="relative h-full w-full">
					<img
					src="./hashing.webp"
					alt="image 2"
					className="h-full w-full object-cover"
					/>
					<div className="absolute inset-0 grid h-full w-full items-center bg-black/75">
					<div className="p-8 mb-20 w-1/2 text-end">
						<Typography
						variant="h1"
						color="white"
						className="mb-4 text-3xl uppercase text-justify"
						>
						Hashing
						</Typography>
						<Typography
						variant="lead"
						color="white"
						className="mb-12 opacity-80 text-justify text-xl"
						>
						El hashing es un proceso matemático que convierte datos de cualquier tamaño en una cadena de longitud fija, generalmente más corta, que representa de manera única los datos originales. <br/>
						Esta técnica se utiliza principalmente en criptografía y seguridad informática para verificar la integridad de los datos y para indexar y recuperar información de bases de datos de manera eficiente. <br />
						Estos algoritmos son ampliamente utilizados en la verificación de contraseñas, la integridad de archivos, la autenticación de mensajes y en la creación de estructuras de datos eficientes como tablas hash. Los algoritmos de hashing más comunes incluyen MD5, SHA-1, SHA-256, entre otros. 
						</Typography>
						{/* <div className="flex justify-center gap-3">
						<Button size="sm" color="white" className="pt-2">
							Más información
						</Button>
						</div> */}
					</div>
					</div>
				</div>
				<div className="relative h-full w-full">
					<img
					src="./esteganografia.webp"
					alt="image 3"
					className="h-[580px] w-full object-cover"
					/>
					<div className="absolute inset-0 grid h-full w-full items-end bg-black/75">
					<div className="p-8 mb-20 w-1/2 text-start">
						<Typography
						variant="h1"
						color="white"
						className="mb-4 text-3xl uppercase text-justify"
						>
						Esteganografía
						</Typography>
						<Typography
						variant="lead"
						color="white"
						className="mb-12 opacity-80 text-justify text-xl"
						>
						La esteganografía es una técnica que consiste en ocultar información dentro de otro mensaje u objeto físico para evitar su detección. Se puede utilizar para ocultar una amplia variedad de contenidos digitales, como texto, imágenes, videos o audios. <br/>
						Esta práctica es fundamental en ciberseguridad, ya que grupos de ransomware y otras amenazas la emplean para esconder información al atacar un objetivo.  <br />
						La esteganografía se diferencia de la criptografía en que no cambia el formato de la información, sino que oculta la existencia del mensaje, lo que la convierte en una herramienta valiosa para la comunicación encubierta.
						</Typography>
						{/* <div className="flex justify-center gap-3">
						<Button size="sm" color="white" className="pt-2">
							Más información
						</Button>
						</div> */}
					</div>
					</div>
				</div>
			</Carousel>
		</div>
				
    )
}