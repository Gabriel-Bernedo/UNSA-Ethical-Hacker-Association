'use client'
import React from 'react'
import {Disclosure} from '@headlessui/react'
import NavBarIcon from '@/dominio/components/icons/NavBarIcon'
import VerticalNav from '../navs/VerticalNav'
export default function NavButton({nav, className}) {
  return (
    <div className="flex flex-col items-end gap-4 w-full lg:hidden">
      <Disclosure>
        <Disclosure.Button className={className ||"p-4 rounded-lg bg-primary-1"}>
          <NavBarIcon></NavBarIcon>
        </Disclosure.Button>
        <Disclosure.Panel className="w-full">
          <VerticalNav nav={nav}/>
        </Disclosure.Panel>
      </Disclosure>
    </div>
  )
}
