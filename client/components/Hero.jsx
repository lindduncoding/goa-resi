import React from 'react';

export default function Hero(props) {
  return (
    <section id="home" className="w-full min-h-screen px-6 md:px-16 py-32 bg-[radial-gradient(ellipse_145.19%_190.18%_at_41.94%_148.97%,_rgba(56,_102,_65,_0)_0%,_rgba(30,_30,_30,_0.90)_100%)] bg-[url('/img/Hero.png')] bg-center bg-cover flex flex-col justify-center items-center text-center gap-6">
      <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold font-poppins">
        Jelajahi Keindahan Alam di <span className="text-lime-400 font-normal font-kaushan">Goa Resi</span>
      </h1>

      <p className="text-white text-xl md:text-2xl font-poppins">Ayo pesan tiketmu sekarang</p>
      <button className="mt-4 px-6 py-2.5 bg-green-800/20 rounded-full shadow-lg text-white text-lg font-semibold font-poppins uppercase hover:bg-green-800/40 transition">
        Pesan Tiketmu
      </button>
    </section>
  )
}
