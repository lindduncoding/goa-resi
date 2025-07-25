import React from 'react'

export default function Activities () {
  return (
    <div className="w-full px-4 md:px-8 lg:px-24 py-14 bg-green-800">
    <div className="text-center text-white text-4xl md:text-5xl font-bold font-poppins mb-12">
      Activities
    </div>

    <div className="max-w-screen-xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
      {[
        { title: 'Outbond', img: 'https://placehold.co/163x212' },
        { title: 'Water Park', img: 'https://placehold.co/163x212' },
        { title: 'Paintball Gun', img: 'https://placehold.co/163x212' },
        { title: 'Flying Fox', img: 'https://placehold.co/163x212' },
      ].map(({ title, img }, idx) => (
        <div key={idx} className="flex gap-6">
          <img
            className="w-40 h-52 object-cover rounded-[20px] shadow-lg border"
            src={img}
            alt={title}
          />
          <div className="flex flex-col gap-2.5">
            <div className="text-white text-2xl md:text-3xl font-bold font-poppins]">{title}</div>
            <div className="text-white text-sm md:text-base leading-relaxed font-poppins">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. It has survived not only five centuries.
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}