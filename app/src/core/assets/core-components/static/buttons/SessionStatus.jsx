'use client'
import React, { Fragment, useState } from 'react'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import LoginButton from './LoginButton'
import MyPopup from '../Popups/MyPopup'



export default function SessionStatus() {

  // const router = useRouter()
  // const isActive = function(pathname){
  //   return router.pathname === pathname
  // }

  const {data: session, status} = useSession()

  let content, label = "Session", className
  switch(status){
    case 'authenticated':
      content = (
        <Fragment>
          <h3>
            Bienvenido, {session.user.name} !!!
          </h3>
          <img src={session.user.image} width={150} height={150} className="rounded-full m-4"/>
          <button onClick={signOut} className="m-4 w-fit text-lg font-semibold text-center bg-primary-1 p-2 rounded-lg text-white">
            Cerrar Sesion
          </button>
        </Fragment>
      )
      label = <img src={session.user.image} width={40} height={40} className="rounded-full"/>
      className = "rounded-lg bg-secondary-2 p-1"
      break
    case 'loading':
      label = "Verificando..."
    case 'unauthenticated':
      content = (
      <Fragment>
        <p>
          Usted no se ha logeado !!!
        </p>
        <p>
          Sin embargo, eso no significa que no pueda gozar de las otras funciones incorporadas a traves del Dashboard
        </p>
        <LoginButton className="m-4 w-fit p-2 bg-primary-1 text-lg rounded-lg font-semibold text-center text-white"/>
      </Fragment>
      )
      break
  }
  return (
    <MyPopup label={label} title="Estado de Cuenta" className={className}>
      <div className="flex flex-col justify-around m-2 text-sm/relaxed text-gray-800 items-center text-center">
        {content}
        <Link
          href="/home"
          className="text-lg font-semibold bg-primary-3 p-2 rounded-lg text-white w-full"
        >
          Dashboard
        </Link>
      </div>
    </MyPopup>
    // <Fragment>
    //   <div className="p-4 rounded-lg bg-secondary-2">
    //     <button onClick={shiftDialog}>
    //       Panel
    //     </button>
    //   </div>
    //   <Transition appear show={isOpen} as={Fragment}>
    //     <Dialog as="div" className="relative z-20" onClose={closeDialog}>
    //       <Transition.Child
    //         as={Fragment}
    //         enter="ease-out duration-300"
    //         enterFrom="opacity-0"
    //         enterTo="opacity-100"
    //         leave="ease-in duration-200"
    //         leaveFrom="opacity-100"
    //         leaveTo="opacity-0"
    //       >
    //         <div className="fixed inset-0 bg-black/25" />
    //       </Transition.Child>
    //       <div className="fixed inset-0 overflow-y-auto">
    //         <div className="flex min-h-full items-center justify-center p-4 text-center">
    //           <Transition.Child
    //             as={Fragment}
    //             enter="ease-out duration-300"
    //             enterFrom="opacity-0 scale-95"
    //             enterTo="opacity-100 scale-100"
    //             leave="ease-in duration-200"
    //             leaveFrom="opacity-100 scale-100"
    //             leaveTo="opacity-0 scale-95"
    //           >
    //             <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
    //               <Dialog.Title
    //                 as="h3"
    //                 className="text-lg font-medium leading-6 text-gray-900"
    //               >
    //                 Payment successful
    //               </Dialog.Title>
    //               <div className="mt-2">
    //                 <p className="text-sm text-gray-500">
    //                   Your payment has been successfully submitted. We’ve sent
    //                   you an email with all of the details of your order.
    //                 </p>
    //               </div>

    //               <div className="mt-4">
    //                 <button
    //                   type="button"
    //                   className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
    //                   onClick={closeDialog}
    //                 >
    //                   Got it, thanks!
    //                 </button>
    //               </div>
    //             </Dialog.Panel>
    //           </Transition.Child>
    //         </div>
    //       </div>
    //     </Dialog>

    //   </Transition>
    // </Fragment>
  )
}
