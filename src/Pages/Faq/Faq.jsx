import React from 'react'
import FaqItemcard from '../../Components/FaqItemcard/FaqItemcard';

const Faq = () => {

  const data=[
    {
      question:'Who is the course designed for?',
      answer:'The course is designed for aspiring and current frontend developers, job seekers, students, and anyone preparing for frontend development interviews.',
    },
    {
      question:'Who is the course designed for?',
      answer:'The course is designed for aspiring and current frontend developers, job seekers, students, and anyone preparing for frontend development interviews.',
    },
    {
      question:'Who is the course designed for?',
      answer:'The course is designed for aspiring and current frontend developers, job seekers, students, and anyone preparing for frontend development interviews.',
    },
    {
      question:'Who is the course designed for?',
      answer:'The course is designed for aspiring and current frontend developers, job seekers, students, and anyone preparing for frontend development interviews.',
    },
    {
      question:'Who is the course designed for?',
      answer:'The course is designed for aspiring and current frontend developers, job seekers, students, and anyone preparing for frontend development interviews.',
    }
  ]
  return (
    <div className='pt-10 pb-20'>
    <div className='px-5 text-4xl font-bold'>Frequently Asked Questions</div>
    <div className='w-full px-5 py-5'>
      
          {
            data.map((item)=>(
                <FaqItemcard question={item.question} answer={item.answer}/>
            ))
               
          }
       
    </div>
    </div>
  )
}

export default Faq;