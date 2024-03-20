import React from 'react'

export default function SessionLabel({session, className}) {
  const {image, name, email} = (session?.user || {})
  return (
    <div className={className || " p-1"}>
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
