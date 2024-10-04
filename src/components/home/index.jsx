import React from 'react'
import Herobanner from './heroBanner'
import Item from './item'
import Slideroffer from './slideroffer'
import SaleBanner from './saleBanner'

export default function Home() {
  return (
    <div>
        <Herobanner/>
        <Slideroffer/>
        <SaleBanner/>
        <Item/>
    </div>
  )
}
