import React from 'react'
import { data } from '@/components/data/data'
import { resources } from '@/components/data/data'
import Link from 'next/link'

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <div className="relative flex place-items-center justify-evenly before:absolute before:h-[300px] before:w-full sm:before:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-full sm:after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700 before:dark:opacity-10 after:dark:from-sky-900 after:dark:via-[#0141ff] after:dark:opacity-40 before:lg:h-[360px] z-[-1]">
        <h1 className="text-center text-3xl">
          {data.name}
        </h1>
      </div>
      <div className="flex flex-col items-center justify-between ">
        <h2 className="mb-16 text-2xl opacity-50">
          ¿Que recursos desea explorar?
        </h2>
        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
          {resources.nav.map(function(e,i){
            return (
              <Link
                key={i}
                href={e.href}
                className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                rel="noopener noreferrer"
              >
                <h2 className="mb-3 text-2xl font-semibold text-center">
                  {e.title}
                </h2>
                <p className="m-0 max-w-[30ch] text-sm opacity-50">
                  XD
                  {e.desc}
                </p>
              </Link>
            )
          })}
        </div>
      </div>
    </main>
  )
}
