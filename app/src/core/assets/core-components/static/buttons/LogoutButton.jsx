import React from 'react'
import { signOut } from 'next-auth/react'
export default function LogoutButton({className, label}) {
  return (
    <button onClick={signOut} className={className}>
      {label || "Log In"}
    </button>
  )
}
