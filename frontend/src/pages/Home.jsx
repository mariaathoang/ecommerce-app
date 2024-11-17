import React from 'react'
import Hero from '../components/Hero'
import NewProducts from '../components/NewProducts'
import BestSeller from '../components/BestSeller'
import OurPolicies from '../components/OurPolicies'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero />
      <NewProducts />
      <BestSeller />
      <OurPolicies />
      <NewsletterBox />
    </div>
  )
}

export default Home
