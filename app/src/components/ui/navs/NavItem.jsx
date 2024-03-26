import React from 'react'
import Link from 'next/link'
const itemDefaultClassName = ""
export default function NavItem({item}) {
  return (
    <li className={item?.className || itemDefaultClassName}>
      <Link
        href={item.href}
      >
        {item.label}
      </Link>
    </li>
  )
}
