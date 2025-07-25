import React from 'react'

export default function Footer () {
  return (
  <div className="w-full px-6 md:px-10 lg:px-36 py-10 bg-green-800 rounded-tl-[40px] rounded-tr-[40px] flex flex-col md:flex-row flex-wrap justify-between items-start gap-8 text-white font-'poppins'">
      <div className="text-base font-bold leading-normal text-center md:text-left w-full md:w-auto">
      &copy; 2025
    </div>

    <div className="w-full md:w-72">
      <p className="text-base font-semibold leading-normal">Alamat</p>
      <p className="text-base font-normal leading-normal">
        Jalan Goa Resi, Dusun Nglarangan, Conto, Bulukerto, Wonogiri Regency, Central Java 57697
      </p>
      <p>
        Lihar di Map
      </p>
    </div>

    <div className="text-base font-bold leading-normal text-center md:text-left w-full md:w-auto">
      Follow Us
    </div>

    <img
      className="w-36 h-36 rounded-[20px] mx-auto md:mx-0"
      src="/img/logo-goa-resi.png"
      alt="Company Logo"
    />

    <div className="flex gap-2 justify-center md:justify-start w-full md:w-auto">
      <div className="w-6 h-6 bg-white" />
      <div className="w-5 h-6 bg-white" />
      <div className="w-8 h-6 bg-white" />
    </div>
  </div>
  )
}