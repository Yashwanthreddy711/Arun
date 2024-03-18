import React from 'react'
import img from './professor image.jpg'
const About = () => {
  return (
    <div className='w-full h-screen px-10 py-10'>
        <div className='flex items-center justify-center text-blue-500 '>
            <h1 className='text-4xl'>About me</h1>
        </div>
        <div className="flex justify-between gap-6 px-10 py-6 transition-all ease-in">
        <div className="flex items-center justify-center px-5">
          <p className="text-center">
          I am Mr. Arun, a seasoned journalist with over three decades of experience in the field. My journey has been one of relentless pursuit, where truth and impact intersected. From bustling newsrooms to conflict zones, I have witnessed history unfold, penning stories that shaped nations, challenged norms, and inspired change. As an investigative reporting pioneer, I fearlessly exposed corruption, unraveled mysteries, and gave voice to the voiceless. My work garnered global recognition, earning prestigious awards and accolades. But my impact extends beyond headlines; I am a mentor and guide, nurturing young talents and shaping the next generation of journalists. In an ever-evolving media landscape, I champion ethical journalism. I believe that truth, compassion, and integrity are the cornerstones of impactful storytelling. My journey is a testament to adaptability, creativity, and the pursuit of truthfulness within a changing world. Now, I share my wealth of knowledge through the “Journalism Unveiled” course, where aspiring journalists can learn from the best, understand the industry’s demands, and embark on their own transformative journeys. 
          
        <span className="text-[#f1c00fef]"> “The pen is mightier than the sword, but
            only when wielded with integrity.” </span>  – Mr. Arun
          </p>
        </div>
        <div className="flex items-center justify-center">
            <img src={img} className="rounded-md"  alt="instructor"/>
        </div>
      </div>



    </div>
  )
}

export default About