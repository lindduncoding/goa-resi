import React from 'react'

const paketData = [
  {
    image: "https://placehold.co/320x400",
    waLink: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Paket%201",
  },
  {
    image: "https://placehold.co/320x400",
    waLink: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Paket%202",
  },
  {
    image: "https://placehold.co/320x400",
    waLink: "https://wa.me/6281234567890?text=Halo,%20saya%20tertarik%20dengan%20Paket%203",
  },
]

export default function Travel () {
  return (
    <section id="travel" className="w-full px-4 md:px-10 lg:px-32 py-14 bg-white flex flex-col items-center gap-12 overflow-hidden">
      <div className="text-center text-green-800 text-4xl md:text-6xl font-bold font-poppins">
        Paket Wisata
      </div>

      {/* Carousel on small screens, grid on large */}
      <div className="w-full lg:flex lg:justify-center lg:gap-6 overflow-x-auto no-scrollbar">
        <div className="flex lg:flex-none gap-4 px-2 lg:px-0">
          {paketData.map((item, idx) => (
            <a
              key={idx}
              href={item.waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[80%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-0 lg:w-80 h-[400px] sm:h-[500px] md:h-[566.76px] rounded-3xl overflow-hidden border border-green-900 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={`Paket ${idx + 1}`}
                className="w-full h-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}