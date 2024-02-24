import React from 'react'
import { data } from '@/components/data/data'
import { resources } from '@/components/data/data'
import Link from 'next/link'
import VibringContainer from '@/components/ui/containers/VibringContainer'

export default function page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-evenly p-24">
      <VibringContainer>
        <h1 className="text-center text-3xl">
          {data.name}
        </h1>
      </VibringContainer>
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
