import React from 'react'
import LogoutButton from '../buttons/LogoutButton'
import GithubLabel from '../labels/GithubLabel'
export default function SessionPanel({session}) {
  const {image, name, email} = session?.user || {}
  return (
    <div className="m-16 flex flex-col gap-4 items-center justify-center">
      {image && 
        <img src={image} alt="" width={120} className="aspect-square rounded-full"/>
      }
      <p>{name}</p>
      <p>{email}</p>
      <div className="flex gap-4 align-center justify-around">
        <GithubLabel/>
        <LogoutButton
          className="rounded-full bg-indigo-700 p-4"
        />
      </div>
    </div>
  )
}
