import React from 'react'

export default function Footer () {
  return (
  <div className="w-full px-6 md:px-10 lg:px-36 py-10 bg-green-800 rounded-tl-[40px] rounded-tr-[40px] flex flex-col md:flex-row flex-wrap justify-between items-start text-white font-'poppins'">
    <div className="flex flex-col w-full md:w-72 gap-2">
      <img
        className="w-36 h-36 rounded-[20px] mx-auto md:mx-0"
        src="/img/logo-goa-resi.png"
        alt="Company Logo"
      />
    <div className="text-base font-bold leading-normal text-center md:text-left w-full md:w-auto">
      Copyright &copy; 2025
    </div>
    </div>

    <div className="flex flex-col w-full md:w-72 gap-2">
      <p className="text-base font-semibold leading-normal">Alamat</p>
      <p className="text-base font-normal leading-normal">
        Jalan Goa Resi, Dusun Nglarangan, Conto, Bulukerto, Wonogiri Regency, Central Java 57697
      </p>
      <a href="https://goo.gl/maps/eGme5egWA6AzDtDn9" target="_blank">
        Lihat di Map
      </a>
    </div>
    <div className="flex flex-col w-full md:w-72 gap-2">
      <div className="text-base font-semibold leading-normal text-center md:text-left w-full md:w-auto">
        Follow Us
      </div>
      <div className="flex gap-2 justify-center md:justify-start w-full md:w-auto">
        <a href="https://www.instagram.com/goaresi/" target="_blank">
          <img className="w-6 h-6" src="/img/instagram.png" />
        </a>
        <a href="https://www.instagram.com/goaresi/" target="_blank">
          <img className="w-6 h-6" src="/img/tiktok.png" />
        </a>
        <a href="https://www.instagram.com/goaresi/" target="_blank">
          <img className="w-6 h-6" src="/img/mail.png" />
        </a>
      </div>
    </div>
  </div>
  )
}