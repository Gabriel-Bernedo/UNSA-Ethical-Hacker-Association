import React from 'react'

export default function Input({label, children, className}) {
  return (
    <label className={className || "mb-3 block text-base font-bold text-indigo-400"}>
      {label}
      <br />
      {children}
    </label>
  )
}
