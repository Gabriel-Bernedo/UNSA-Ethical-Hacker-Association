import Top from "@/sections/index/Top"
import Hero from "@/sections/index/Hero"
import MyBar from "@/components/ui/bars/MyBar"
import { home } from "@/data/manager"
import MyImage from "@/components/images/MyImage"
import { Fragment } from "react"
import Navigation from "@/components/ui/navs/Navigation"

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