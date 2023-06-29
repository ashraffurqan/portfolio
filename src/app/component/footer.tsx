import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import logo from "../../../public/logo.jpg"
import {BsLinkedin}from "react-icons/bs"
const Footer = () => {
  return (
    <div><footer className="text-gray-600 body-font">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
      <Image src={logo}height={100}width={100}alt='logo'
         /> 
        <span className="ml-3 text-xl">Web Master</span>
      </a>
      <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
        © 2023 Web Master — Powerd by Furqan
      
      </p>
      <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
      
      <Link 
      target='blank'
      href={"https://www.linkedin.com/public-profile/settings"} >
      <BsLinkedin className='text-2xl hover:text-blue-300'/>
      </Link>
    
   
      </span>
    </div>
  </footer>
  </div>
  )
}

export default Footer