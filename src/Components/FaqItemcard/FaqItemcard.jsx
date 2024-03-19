import React from 'react'
import { RiArrowDownSLine } from "react-icons/ri";

const FaqItemcard = (props) => {
  return (
    <div className='flex justify-between '>
      <div>
         <h1>{props.question}</h1>
         <h1>{props.answer}</h1>
      </div>
      <div>
        <RiArrowDownSLine/> 
      </div>
    </div>
  )
}

export default FaqItemcard