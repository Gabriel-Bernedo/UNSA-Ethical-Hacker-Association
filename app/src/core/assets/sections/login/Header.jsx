import React from 'react'
import MyImage from "@/components/images/MyImage";

export default function Header() {
  return (
    <div className="flex flex-col items-center">
      <MyImage imgName="logo"/>
      <h2 className="block mb-5 text-indigo-500 text-center font-bold uppercase text-2xl pb-1">UNSA Ethical Hacker Association</h2>
    </div>
)
}
