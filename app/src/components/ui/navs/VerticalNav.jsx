'use client'
import React from 'react'
import NavItem from './NavItem'

export default function VerticalNav({nav}) {
  return (
    <nav>
      <ul className="flex flex-col items-center px-6 py-4 gap-16 text-white bg-primary-3 rounded-lg">
        {nav.map((e,i)=>{
          return <NavItem item={e} key={i}/>
        })}
      </ul>
    </nav>
  )
}
