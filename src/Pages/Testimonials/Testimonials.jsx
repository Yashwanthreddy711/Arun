import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import StarRating from '../../Components/Starrating/Starrating';


const Testimonials = () => {
      
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide:0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const data = [
    {
       
       url:'https://images.pexels.com/photos/10417389/pexels-photo-10417389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       title:'Best platform for Learning ',
       text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate ',
       author:'Yashwanth Reddy'
       
    },
    {
       url:'https://images.pexels.com/photos/1181685/pexels-photo-1181685.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       title:'Best platform for Learning ',
       text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate .',
       author:'Yashwanth Reddy'
    },
    {
      url:'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'Best platform for Learning ',
      text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate',
      author:'Yashwanth Reddy'
    },
    {
       url:'https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       title:'Best platform for Learning ',
       text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate ',
       author:'Yashwanth Reddy'
    },
    {
       url:'https://images.pexels.com/photos/2381069/pexels-photo-2381069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       title:'Best platform for Learning ',
       text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate .',
       author:'Yashwanth Reddy'
    },
    {

       url:'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       title:'Best platform for Learning ',
       text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.',
       author:'Yashwanth Reddy'
    },
    {
       url:'https://images.pexels.com/photos/1181391/pexels-photo-1181391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       title:'Best platform for Learning ',
       text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.',
       author:'Yashwanth Reddy'
    },
    {
       url:'https://images.pexels.com/photos/7651981/pexels-photo-7651981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
       title:'Best platform for Learning ',
       text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate .',
       author:'Yashwanth Reddy'
    },
    {
      url:'https://images.pexels.com/photos/32976/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      title:'Best platform for Learning ',
      text:'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate.',
      author:'Yashwanth Reddy'
    }

   ]
  return (
    <div id='testimonials' className="w-full h-full py-10 text-center">
      <div className="flex items-center justify-center ">
        <h1 className="text-2xl text-blue-500">Why to Choose us</h1>
      </div>
      <div className="max-w-[500px] mx-auto py-5">
        <h1 className="text-4xl font-bold ">
          Why to Launch a Career in Journalism{" "}
        </h1>
      </div>
      <div className="max-w-[700px] mx-auto py-4">
        <p className="text-center">
        Welcome to our Journalism Unveiled Course, where you'll uncover the secrets of impactful storytelling and acquire practical skills to thrive in the ever-evolving field of journalism.
        </p>
      </div>
  

    <Slider {...settings}>
        {
          data.map((item)=>(
            <div id={item.url} className='flex items-center justify-between px-5'>
           
              <div className='flex items-center justify-center gap-2 py-2'>
              <img src={item.url} className='h-[200px] rounded-md w-[200px]' alt='slider'/>
              <div className='flex flex-col items-center justify-center gap-2 max-w-[300px]'>
                 <StarRating/>
                 <h1 className='font-bold text-[12px]'>{item.title}</h1>
                 <h1 className='text-[12px]'>{item.text}</h1>
                 <h1>{item.author}</h1>
                 </div>
              </div>
            </div>
          
          ))
        }
    </Slider>
  
      </div>
  )
}

export default Testimonials