import React, { useState } from 'react';
import { RiArrowDownSLine } from "react-icons/ri";

const FaqItemcard = (props) => {
  const [active, setActive] = useState(0);
  
  const toggleVisibility = () => {
    setActive(active === 0 ? 1 : 0);
  };
  
  return (
    <div className='flex justify-between border-b-2 border-gray-200'>
      <div className='p-4 '>
         <h1>{props.question}</h1>
         <h1 className={`${active === 0 ? 'hidden' : 'flex'} pt-4 transition-transform duration-300 transform`}>{props.answer}</h1>

      </div>
      <div className='flex justify-center p-4'>
  <RiArrowDownSLine 
    className={` cursor-pointer transform ${active === 1 ? 'rotate-180' : ''}`} 
    size={30} 
    onClick={toggleVisibility}
    style={{ transition: 'transform 0.3s ease' }} // Adding transition
  /> 
</div>

    </div>
  );
}

export default FaqItemcard;
