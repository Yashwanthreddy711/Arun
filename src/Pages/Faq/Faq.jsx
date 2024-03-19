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
    <div>
    <div className='text-4xl font-bold'>Frequently Asked Questions</div>
    <div>
      {
         data.map((item)=>(
           <FaqItemcard id={item.question} question={item.question} answer={item.answer}/>
         ))
 }
       
    </div>
    </div>
  )
}

export default Faq;