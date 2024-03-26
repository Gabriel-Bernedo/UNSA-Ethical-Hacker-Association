import React from 'react'

export default function NavBarIcon({color}) {
  const className=`w-8 h-0.5 ${color || "bg-white"}`
  return (
    <div className="space-y-2">
      <div className={className}></div>
      <div className={className}></div>
      <div className={className}></div>
    </div>
  )
}
