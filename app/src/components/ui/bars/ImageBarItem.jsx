import React from 'react'
import Link from 'next/link'
export default function ImageBarItem({data}) {
  return (
    <Link
      href={data.href}
      img={data.img}
      className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      rel="noopener noreferrer"
    >	
      <img src={data.img} alt="" className="w-96 h-40 rounded-lg"/>
      <h2 className="mb-3 text-2xl font-bold text-center pt-4 uppercase">
      {data.title}
      </h2>
    </Link>
  )
}
