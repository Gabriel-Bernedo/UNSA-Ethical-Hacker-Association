import React from 'react'

export default function InfoCard({data, className}) {
  return (
    <div className={`bg-cyber-cover shadow transition bg-cover 
      rounded-2xl overflow-hidden 
      hover:drop-shadow-primaryFullLight drop-shadow-primaryLight ${className}`}
    >
      <section className="transition duration-100 
        backdrop-blur-sm hover:backdrop-blur-[1px] backdrop-saturate-0
        relative bg-gradient-to-t from-gray-900/25 to-transparent h-full
        hover:drop-shadow-secondaryFullLight drop-shadow-secondaryLight" 
      >
        <div className="flex flex-col justify-end">
          <div className="p-4 pt-8 text-white">
            <h3 className="mt-0.5 text-lg font-bold">
              {data.title}
            </h3>
            <p className="mt-2 line-clamp-10 lg:text-sm/relaxed text-justify text-xs/relaxed">
              {data.desc}
            </p>
          </div>
        </div>
      </section>
    </div> 
  )
}
