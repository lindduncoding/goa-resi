import React from 'react'

export default function Map () {
  return (
  <div className="w-full px-4 md:px-10 lg:px-32 pt-5 pb-14 bg-white flex flex-col items-center gap-12 overflow-hidden">
    <div className="text-center text-green-800 text-4xl md:text-6xl font-bold font-poppins">
      Peta Wisata
    </div>

    <div className="w-full rounded-3xl border border-green-900 overflow-hidden
                  aspect-[4/3] sm:aspect-[16/9] md:aspect-[1200/566] max-w-[1200px]">
      <iframe
        src="https://www.google.com/maps/d/embed?mid=1wR9sG8CPpr9RMHp8Qebk5YimdBe-F48&ehbc=2E312F"
        allowFullScreen=""
        loading="lazy"
        className="w-full h-full"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
  )
}