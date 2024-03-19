import React from 'react'
import { FaGithub } from "react-icons/fa6";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <div id='footer' className='flex flex-col w-full h-40 gap-5 '>

      <div className='pt-5 text-center'>
        <h1>Arun</h1>
      </div>
      <div className='flex items-center justify-center gap-5 '>
        <h1>Privacy Policy</h1>
        <h1>Terms of use</h1>
      </div>
      <div className='flex items-center justify-center gap-4 text-blue-500 '>
        <BiLogoInstagramAlt size={25}/>
        <FaFacebook size={25}/>
        <FaTwitter size={25}/>
        <FaGithub size={25}/>

      </div>

    </div>
  )
}

export default Footer