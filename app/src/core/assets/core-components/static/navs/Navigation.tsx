
import React, { FC, Fragment } from 'react'
import Image from 'next/image'

import NavButton from '../disclosures/NavButton'
import MiniNav from './MiniNav'
import SessionStatus from '../buttons/SessionStatus'

interface NavProps {
  nav? : NavItem[]
}

interface NavItem {
  label: string,
  href: string,
}

const Navigation : FC<NavProps> = ({nav}) => {
  return (
    <header className="flex items-center gap-4 justify-end md:max-w-full px-4 md:px-6 py-4 md:flex-row fixed top-0 z-50 w-full backdrop-blur bg-secondary-2 bg-opacity-30">
      <a href="/" className="z-10 absolute top-1 left-5 ">
        <Image src="/logos/logonew.svg" className="w-20 p-0 g-image" height={80} width={80} alt="" priority/>
      </a>
      {nav ?
      <Fragment>
        <MiniNav nav={nav}/>
        <NavButton nav={nav} className="relative right-0 p-4 bg-primary-3 rounded-lg"/>
      </Fragment>
        :
      ""
      }
      <SessionStatus />
    </header>
  )
  }

export default Navigation