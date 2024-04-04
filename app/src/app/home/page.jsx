import { Fragment } from "react"

import MyBar from "@/dominio/components/ui/bars/MyBar"
import MyImage from "@/dominio/components/images/MyImage"
import Navigation from "@/dominio/components/ui/navs/Navigation"

import Top from "@/dominio/sections/index/Top"
import Hero from "@/dominio/sections/index/Hero"

import { home } from "@/dominio/data/manager"
const nav = [
  {
    label : "About",
    href : "/"
  }
]

export default function Home() {
   return (
    <Fragment>
      <Navigation nav={nav}></Navigation>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <Top/>
        <Hero 
          data={home.intro.desc} 
          hero={<MyImage imgName="logo"/>}
          />
        <MyBar data={home.nav} type="details"/>
      </main>
    </Fragment>
   )
 }