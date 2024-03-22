import Top from "@/sections/index/Top"
import Hero from "@/sections/index/Hero"
import MyBar from "@/components/ui/bars/MyBar"
import { index } from "@/components/data/data"
import MyImage from "@/components/images/MyImage"
export default function Home() {
   return (
     <main className="flex min-h-screen flex-col items-center justify-between p-24">
       <Top/>
       <Hero 
         data={index.intro.desc} 
         hero={<MyImage imgName="logo"/>}
       />
       <MyBar data={index.nav} type="details"/>
     </main>
   )
 }