import React from 'react'
import Link from 'next/link'
import MyImage from '@/components/images/MyImage'

export default function PartnerMainLink({href, label, imgName}) {
  return (
    <Link
      className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {label ? label + " " : ""}
      <MyImage imgName={imgName}/>
    </Link>
  )
}
