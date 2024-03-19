import React from 'react'
import FaqItemcard from '../../Components/FaqItemcard/FaqItemcard';

const Faq = () => {

  const data=[
    {
      question:'Who is the course designed for?',
      answer:"The course is designed for anyone interested in pursuing a career in journalism or enhancing their existing skills in the field. Whether you're a student looking to kickstart your journey in journalism, a professional seeking to transition into the industry, or an individual simply passionate about storytelling and media, this course is for you",
    },
    {
      question:'Are there any prerequisites for the course?',
      answer:"While there are no strict prerequisites for the course, a basic understanding of writing and communication skills would be beneficial. Since journalism encompasses a wide range of topics and skills, having a curiosity about current events, a desire to learn, and a willingness to engage with new ideas are important qualities for participants to bring to the course",
    },
    {
      question:'Is there a refund policy available for this course?',
      answer:"You are eligible for a refund if the course you purchased is not assigned to you within the expiration date from your purchase or if you have been charged twice for the same course. Refund requests under any other circumstances will not be considered, as this is a digital course purchase.",
    },
    {
      question:'Is this a Job Guarantee Course?',
      answer:'While we do not offer a job guarantee with this course, we provide comprehensive training and valuable skills that are highly sought after in the field of journalism. Our curriculum is designed to equip you with the knowledge, practical experience, and networking opportunities needed to pursue a successful career in journalism. We offer guidance on job search strategies, resume building, and interview preparation to support you in your job search efforts. While we cannot guarantee employment, we are committed to providing you with the tools and resources necessary to succeed in the industry.',
    },
 
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