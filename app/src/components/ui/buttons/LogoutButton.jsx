import React from 'react'
import MyActionButton from './MyActionButton'

export default function LogoutButton({className, isActive, label, onClick}) {
  return (
    <MyActionButton 
      href="/api/auth/signout"
      className={className}
      isActive={isActive === undefined ? true: isActive}
      label={label || "Log Out"}
      onClick={onClick}
    />
  )
}
