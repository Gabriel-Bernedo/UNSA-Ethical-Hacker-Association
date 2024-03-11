import React from 'react'

export default function Input({label, children}) {
  return (
    <label class="mb-3 block text-base font-bold text-indigo-400">
      {label}
      <br />
      {children}
    </label>
  )
}
