import React from 'react'
import Link from 'next/link'
import { Disclosure } from '@headlessui/react'
const itemDefaultClassName = ""
export default function NavItem({item, inPanel}) {
  return (
    <li className={item?.className || itemDefaultClassName}>
      {inPanel? 
        <Disclosure.Button
        as={Link}
        href={item.href}
        >
          {item.label}
        </Disclosure.Button>
      :
        <Link
          href={item.href}
        >
          {item.label}
        </Link>
      }
    </li>
  )
}
