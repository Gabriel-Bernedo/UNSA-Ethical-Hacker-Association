import React from 'react'

export default function SessionLabel({session, className}) {
  const {image, name, email} = (session?.user || {})
  return (
    <div className={className || " rounded-full bg-indigo-700 p-1"}>
      { image ?
        <img src={image} alt="" width={60} className="aspect-square rounded-full"/>
      : name ?
        <p>{name}</p>
      :
        <p>{email}</p>
      }
    </div>
  )
}
