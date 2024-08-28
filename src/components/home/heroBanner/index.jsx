import React from 'react'
import './herobanner.scss'
import HeroBanner from '../../../assets/image/herobanner.jpg'

export default function Herobanner() {
  return (
    <div className='hero-banner'>
      <img src={HeroBanner} alt='heroImg'/>
      <div className='layer'></div>
    </div>
  )
}
