import React from 'react'
import './herobanner.scss'
import HeroBanner from '../../../assets/image/herobanner.jpeg'

export default function Herobanner() {
  return (
    <div className='hero-banner'>
      <img src={HeroBanner}/>
      <div className='layer'></div>
    </div>
  )
}
