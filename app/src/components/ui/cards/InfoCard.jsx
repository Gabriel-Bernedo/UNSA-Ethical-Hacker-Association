import React from 'react'

export default function InfoCard({data}) {
  return (
    <div className="bg-cyber-cover shadow transition bg-cover 
      rounded-2xl overflow-hidden 
      hover:drop-shadow-light drop-shadow-bitLight"
    >
      <section className="transition duration-100 
        backdrop-blur-sm hover:backdrop-blur-[1px] 
        relative bg-gradient-to-t from-gray-900/25 to-transparent 
        hover:drop-shadow-dark drop-shadow-bitDark" 
      >
        <div className="relative pt-32 sm:pt-48 lg:pt-40">
          <div className="p-4 sm:p-6 text-teal-100">
            <h3 className="mt-0.5 text-lg font-bold">
              {data.title}
            </h3>
            <p className="mt-2 line-clamp-10 text-sm/relaxed text-justify">
              {data.desc}
            </p>
          </div>
        </div>
      </section>
    </div> 
  )
}