'use client'
import React, { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Banner from '@/components/ui/containers/Banner'

export default function CourseContainer({data}) {
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
        alt="IMAGEN :v"
        className="rounded dark:drop-shadow-bitDark drop-shadow-bitLight"
        width={120}
        height={120}
      />
      <div className="col-span-3 p-4">
        <h2 className="text-xl font-semibold"> {data.name} </h2>
        <p className="text-sm opacity-50"> {data.desc}</p>
      </div>
    </Link>
      <Banner />
    </div>

  )
}
