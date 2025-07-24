import React, { useState, useEffect } from 'react'

import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Details from './components/Details.jsx'

export default function App (props) {
  return (
    <>
    < Navbar/>
    < Hero />   
    <Details /> 
    </>
  )
}