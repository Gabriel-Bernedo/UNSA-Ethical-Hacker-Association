"use client"
import {signOut} from 'next-auth/react'

function DashboardPage() {
    //ruta protegida por el middleware
    return (
        <section className="h-[calc(100vh-7rem)] flex  justify-center items-center">
            <h1 className="text-white text-5xl">Dashboard</h1>
            <button className='bg-white text-black px-4 py-2' onClick={()=>signOut()}>Logout</button>
        </section>
    )
}

export default DashboardPage