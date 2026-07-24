import React from 'react'
import Hero from './companents/Hero/Hero'
import Travels from './companents/Travels/Travels'
import Offer from './companents/Offer/Offer'
import Tickets from './companents/Tickets/Tickets'
import Interesting from './companents/Interesting/Interesting'
import Location from "../app/companents/locations/location"
const Home = () => {
  return (
    <>
    <Hero/>
    <Travels/>
    <Offer/>
    <Tickets/>
    <Interesting/>
    <Location/>
    </>
  )
}

export default Home