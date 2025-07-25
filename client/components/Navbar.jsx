import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 50);
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function toggleMenu() {
    setIsOpen(!isOpen)
  }

  const menuItems = [
    {title: "Beranda", ref: "#home"}, 
    {title: "Tentang", ref: "#details"}, 
    {title: "Galeri", ref: "#gallery"}, 
    {title: "Informasi", ref: "#activities"}, 
    {title: "Kontak", ref: "#travel"}
  ]

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="w-full shadow-lg flex justify-between items-center px-6 md:px-12 lg:px-20 py-4">
        {/* Logo as menu toggle on mobile */}
        <button
          onClick={toggleMenu}
          className="w-20 h-20 flex justify-center items-center focus:outline-none md:cursor-default"
          aria-label="Toggle menu"
        >
          <img className="w-16 h-16 rounded-full" src="img/logo-goa-resi.png" alt="Logo Goa Resi" />
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6">
          {menuItems.map(({ title, ref }) => (
            <a
              key={title}
              className={` ${isScrolled ? 'text-grey-800' : 'text-white'} text-base lg:text-lg font-medium font-poppins hover:text-green-600 transition-colors`
              }
              href={ref}
              >
              {title}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden pt-6 px-6 pb-6">
          <div className="flex flex-col gap-4">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setIsOpen(false)}
                className="text-white text-base font-medium font-poppins text-left hover:text-blue-400 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
