
import { Fragment } from "react";
import About from "@/sections/landing/About"
import Abot from "@/sections/landing/Abot";
import More from "@/sections/landing/More";
import Carousel from "@/sections/landing/Carousel";
import Footer from "@/sections/landing/Footer";
import Navegacion from "@/components/ui/navs/Navigation";
import Activities from "@/sections/landing/Activities";
// export default

const navigation = [
  {
      label: "Home",
      href: "./#Home",
  },
  {
      label: "Nosotros",
      href: "./#Nosotros",
  },
  {
      label: "Informacion",
      href: "./#Informacion",
  },
  {
      label: "Conocimiento",
      href: "./#Conocimiento",
  },
  {
      label: "Actividades",
      href: "./#Actividades",
  }
]

export default function LandingPage(){
    return (

     <Fragment>
      <Navegacion nav={navigation}/>
       <main className="w-full">
         <About/>
         <Abot/>
         <More />
         <Carousel />
         <Activities />
         <Footer />
       </main>
     </Fragment>
    )
}

/*<p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <code className="font-mono font-bold">src/app/page.js</code>
        </p> */