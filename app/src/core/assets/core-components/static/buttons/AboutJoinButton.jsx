import React from 'react'
// import MyIcon from '@/dominio/components/icons/MyIcon'
import Image from 'next/image'
export default function AboutJoinButton() {
  return (
    <div className="mt-12 flex items-center justify-center gap-x-6">
      <a type="button" 
        className="text-md relative transition duration-100 
        inline-flex items-center gap-x-2 rounded-lg 
        bg-indigo-800 px-6 py-4 font-semibold text-white 
        hover:bg-teal-500 focus-visible:outline 
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600 
        drop-shadow-bitLight hover:drop-shadow-dark"
        href="https://chat.whatsapp.com/Hmktq3HILhx0xK0xG40LqO"
      >
          ¡ Unete Ya !
          {/* <MyIcon iconName="right-arrow"/> */}
          <Image src="/svg/wpp-svg.svg" width={30} height={30} alt='' className='bg-gray-300 rounded-lg p-1'/>
      </a>
    </div>
  )
}
