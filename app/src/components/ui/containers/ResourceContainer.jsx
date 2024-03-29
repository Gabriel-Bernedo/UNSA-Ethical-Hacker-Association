'use client'
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
    </Link>
        <Banner />
    </div>
  )
}
