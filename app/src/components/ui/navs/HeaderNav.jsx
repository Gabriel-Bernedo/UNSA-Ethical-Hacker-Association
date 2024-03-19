import React, { Fragment } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { signOut, useSession } from 'next-auth/react'

import MyImage from '@/components/images/MyImage'
import LoginButton from '../buttons/LoginButton'
import LogoutButton from '../buttons/LogoutButton'
import SessionLabel from '../labels/SessionLabel'
import SessionPanel from '../panels/SessionPanel'
import MyPopup from '../Popups/MyPopup'

const NavItemsClassName="inline-block font-bold data-[active=false]:opacity-60 data-[active=false]:hover:opacity-80 "
const NavSectionClassName="flex gap-10 items-center "
export default function HeaderNav() {

  const router = useRouter()
  const isActive = function(pathname){
    return router.pathname === pathname
  }

  const {data: session, status} = useSession()

  let 
  left = (
    <div className={NavSectionClassName + "justify-start left-0"}>
      <MyImage imgName="logo-item"/>
      <Link href="/" legacyBehavior>
        <a className={NavItemsClassName} data-active={isActive('/')}>
          Home
        </a>
      </Link>
    </div>
  ),

  right = (
    <div className={NavSectionClassName + "justify-end right-0"}>
      {  session ?
        <Fragment>
          <MyPopup
            trigger={() => <SessionLabel session={session}/>}
          >
            {() => 
              <SessionPanel session={session}/>
            }
          </MyPopup>
          
          {/* <button onClick={() => signOut()}>
            <a> Log Out </a>
          </button> */}
          <LogoutButton
            className={NavItemsClassName}
          />
          
        </Fragment>
      :
        status === "loading" ? 
          <div> Validating session ... </div>
        :
          <LoginButton
            className={NavItemsClassName}
            isActive={isActive('/signup')}
          />
      }
    </div>
  )
  return (
    <nav className="flex py-4 px-10 justify-between w-full bg-indigo-500">
      {left}
      {right}
    </nav>
  )
}
