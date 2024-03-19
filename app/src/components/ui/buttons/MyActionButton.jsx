import React from 'react'
import Link from 'next/link'

export default function MyActionButton({href, className, isActive, label, onClick}) {
  return (
    <Link
      href={href}
      legacyBehavior
    >
      <a  
        className={className}
        data-active={isActive}
        onClick={onClick}
      >
        {label}
      </a>
    </Link>
  )
}
