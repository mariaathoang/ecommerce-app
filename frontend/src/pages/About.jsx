import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[480px]' src={assets.ice_creams} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
        <p>A small-scale store handled by just a few people, working simply with passion and ambition.</p>
        <p>Get a taste!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>We seek to spread happiness to anyone willing to explore new flavours through a dessert that is prevalent in Korea!</p>
        </div>
      </div>
      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>
      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Our ice creams are carefully being shipped directly from Korea, where it will then be shipped to you just as carefully! </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Where else have you seen a store like this available anywhere?</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Our customer service team are always ready to help you if you happen to find a problem with your order.</p>
        </div>
      </div>
      <NewsletterBox />
    </div>
  )
}

export default About
