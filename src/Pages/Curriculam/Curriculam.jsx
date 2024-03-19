import React from 'react'

const Curriculam = () => {
  return (
    <div id="course" className="w-full h-full py-10 text-center border-b-2 border-gray-200 shadow-b-lg">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-blue-500">Our Curriculum</h1>
      </div>
      <div className="max-w-[500px] mx-auto py-5">
        <h1 className="text-4xl font-bold ">
          What you will Learn{" "}
        </h1>
      </div>
      <div className="max-w-[700px] mx-auto">
        <p className="py-5 text-center">
        Our curriculum is designed to provide you with a solid foundation in the principles of journalism while also exploring emerging trends and technologies shaping the industry today.
        </p>
      </div>

      <div className='flex flex-wrap items-center justify-center gap-4 px-5'>
        

        <div className='flex items-center justify-center w-full md:w-[400px] h-20 text-white bg-gradient-to-r from-blue-300 to-blue-500 rounded-md'>
            <h1 className='text-center'>Introduction to Journalism </h1>
        </div>
        <div className='flex items-center justify-center w-full rounded-md md:w-[400px] h-20 text-white bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>News Writing and Reporting </h1>
        </div>
        <div className='flex items-center justify-center w-[400px] rounded-md h-20 text-white bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>Media Ethics and Law </h1>
        </div>
        <div className='flex items-center justify-center w-[400px] h-20 rounded-md text-white bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>Investigative Journalism </h1>
        </div>
        <div className='flex items-center justify-center w-[400px] h-20 rounded-md text-white bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>Broadcast Journalism </h1>
        </div>
        <div className='flex items-center justify-center w-[400px] h-20 rounded-md text-white bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>Digital Journalism </h1>
        </div>
        <div className='flex items-center justify-center w-[400px] h-20 text-white rounded-md bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>Feature Writing </h1>
        </div>
        <div className='flex items-center justify-center w-[400px] h-20 text-white rounded-md bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>Photojournalism </h1>
        </div>
        <div className='flex items-center justify-center w-[400px] h-20 text-white rounded-md bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>International Reporting</h1>
        </div>
        <div className='flex items-center justify-center w-[400px] h-20 text-white rounded-md bg-gradient-to-r from-blue-300 to-blue-500'>
            <h1 className='text-center'>Specialized Reporting </h1>
        </div>
      </div>
      
      </div>
  )
}

export default Curriculam