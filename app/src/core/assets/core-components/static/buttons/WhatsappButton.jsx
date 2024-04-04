import React from 'react'
import Image from 'next/image'
export default function WhatsappButton({className}) {
  return (
    <a href="https://chat.whatsapp.com/Hmktq3HILhx0xK0xG40LqO">
      <Image src="/svg/wpp-svg.svg" width={50} height={50} alt='' 
        className={'bg-gray-300 hover:bg-teal-500 hover:drop-shadow-dark drop-shadow-primaryLight rounded-lg p-2.5 '
        + className
      }
      />
    </a>
  )
}
