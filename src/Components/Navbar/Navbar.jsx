import React from 'react'

const Navbar = () => {
  return (
    <div className='w-full h-20 mt-5'>
          <div className='flex items-center justify-between'>
             <h2 className='px-2 text-2xl font-bold'>Arun.</h2>
            <ul className='flex items-center'>
                <li>About</li>
                <li>Course</li>
                <li>Testimonials</li>
                <li>Contact</li>
                <button className='px-6 mx-8'>Enroll Now</button>
            </ul>
             
          </div>
    </div>
  )
}

export default Navbar