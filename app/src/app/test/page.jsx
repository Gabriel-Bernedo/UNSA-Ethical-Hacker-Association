'use client'
import React from 'react'
import VibringContainer from '@/components/ui/containers/VibringContainer'
import MyPopup from '@/components/ui/Popups/MyPopup'
import Form from '@/sections/login/Form'
import LoginButton from '@/components/ui/buttons/LoginButton'
import HeaderNav from '@/components/ui/navs/HeaderNav'
import CTF from '@/sections/landing/CTF'
export default function page() {
  return (
    <main className='h-full'>
      <VibringContainer>
        <div className="h-screen">
          <CTF/>
        </div>
        {/* <MyPopup trigger={
          (
            LoginButton
          )
        }>
          {function(){
            return <LogInPanel/>
          }}
        </MyPopup> */}
        {/* <MyPopup
          trigger={
            <button className="bg-slate-300 border m-10">
              Log In
            </button>
          }
        >
          
        </MyPopup> */}
      </VibringContainer>
    </main>
  )
}
