import React, { Fragment } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Banner from '@/components/ui/containers/Banner'
export default function ResourceContainer({data}) {
  return (
    <div
      className="group rounded-lg border border-transparent px-4 py-5 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
    >
    <Link
      href={data.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src="/file.png"
        alt="Imagen :v"
        className="rounded"
        width={100}
        height={100}
      />
      <div className="p-2 m-2">
        <h2 className="text-xl font-semibold mb-2">
          {data.title}
        </h2>
        <p  className="text-sm opacity-50">
          {data.type}
        </p>
      </div>
      {/* <div class="flex flex-wrap mt-10 justify-center">
        <div class="m-3">
            <a href="#" class="md:w-32 bg-amber-600 tracking-wide text-white font-bold rounded border-2 hover:border-amber-700 hover:bg-amber-700 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span class="mx-auto">Editar</span>                    
            </a>
        </div>
        
        <div class="m-3">
            <a href="#" class="md:w-32 bg-red-500 tracking-wide text-white font-bold rounded border-2 border-red-700 hover:border-red-700 hover:bg-red-700 hover:text-white shadow-md py-2 px-6 inline-flex items-center">
                <span class="mx-auto">Eliminar</span>
            </a>
        </div>
        </div> */}
    </Link>
    <Banner/> 
    </div>
  )
}
