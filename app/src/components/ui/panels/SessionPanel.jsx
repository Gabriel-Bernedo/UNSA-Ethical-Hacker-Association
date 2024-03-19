import React from 'react'
import LogoutButton from '../buttons/LogoutButton'
export default function SessionPanel({session}) {
  const {image, name, email} = session?.user || {}
  return (
    <div className="m-16 flex flex-col items-center justify-center">
      {image && 
        <img src={image} alt="" />
      }
      <p>{name}</p>
      <p>{email}</p>
      <LogoutButton/>
    </div>
  )
}
