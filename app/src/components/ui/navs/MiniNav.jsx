'use client'
import React from 'react'
import NavItem from './NavItem'

export default function MiniNav({nav}) {
  return (
    <nav className="lg:block hidden">
      <ul className="flex flex-row items-center px-6 py-4 gap-16 text-white bg-primary-3 rounded-lg">
        {nav.map(function(e,i){
          return (
            <NavItem item={e} key={i}/>
          )
        })}
      </ul>
    </nav>
  )
}
