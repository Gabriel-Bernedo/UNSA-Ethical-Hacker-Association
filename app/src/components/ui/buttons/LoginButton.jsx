import React from 'react'
import MyActionButton from './MyActionButton'
export default function LoginButton({className, isActive, label}) {
  return (
    <MyActionButton 
      href="/api/auth/signin"
      className={className}
      isActive={isActive === undefined ? true: isActive}
      label={label || "Log In"}
    />
  )
}
