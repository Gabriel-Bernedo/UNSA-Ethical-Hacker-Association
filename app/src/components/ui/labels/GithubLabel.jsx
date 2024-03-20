import React from 'react'

export default function GithubLabel({className, width}) {
  return (
    <div className={className || "bg-black rounded-full"}>
      <img src="https://github.githubassets.com/favicons/favicon-dark.png" alt="" width={width || 40} className="aspect-square"/>
    </div>
  )
}
