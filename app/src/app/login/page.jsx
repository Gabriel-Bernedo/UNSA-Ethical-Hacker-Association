import React from "react";
import Header from "@/sections/login/Header";
import Form from "@/sections/login/Form";

export default function page() {
    // Login
    return (
        <main className="w-full h-screen grid grid-cols-2">
            <div className="lg:p-12 p-8">
                <Header/>
                <Form />
		    </div>
            <div className="h-full bg-anime-cover-3 bg-cover block bg-center">
                {/*<img src="/img.webp" alt="Placeholder Image" className="object-cover w-full h-[895px]"/>*/}
            </div>
            {/* <!-- Login --> */}
    </main>
    )
  }
  