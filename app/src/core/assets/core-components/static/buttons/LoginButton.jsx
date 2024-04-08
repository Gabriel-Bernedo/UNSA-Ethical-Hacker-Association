import React from 'react'

import { signIn } from 'next-auth/react'

export default function LoginButton({className, label}) {
  return (
    <button onClick={signIn} className={className}>
      {label || "Log In"}
    </button>
  )
}
