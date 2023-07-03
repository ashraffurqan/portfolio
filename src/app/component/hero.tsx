"use client"
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import Typewriter from 'typewriter-effect';
import dp from '../../../public/dp.jpg'

 export const Hero = () => {
  
  return (
    <section className="text-gray-600 body-font bg-gray-50" >
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
        I Am
        <Typewriter
  options={{
    strings: ['Web Developer', 'UI/UX Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      
       
        </h1>
        <div className='w-[50px] h-[2px]  bg-blue-700'></div>
        <p className="mb-8 leading-relaxed">
        Hey there! I'm a  Web Developer. I can help you using the followaing technologies:
         HTML5, CSS, JavaScript, React, Express, NextJS,   API,
         Chrome Extension, Shopify. I am looking forward to working for you and building a long-term relationship!
        </p>

        <div className="flex justify-center">
          <Link href={"#Contact"}>
          <button className="inline-flex text-white bg-blue-300-500 border-0 py-2 px-6 focus:outline-none bg-blue-500 hover:bg-blue-600 rounded text-lg">
            Contact
          </button>
          </Link>
        </div>
     </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image
          className="object-cover object-center rounded"
          alt="Profile Pic"
          height={300}
          width={300}
          src={dp}></Image>
          
      </div>
    </div>
  </section>
  
  )
}

export default Hero