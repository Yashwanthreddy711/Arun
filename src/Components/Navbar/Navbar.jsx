import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setnav] = useState(true);
  const handlenav = () => {
    setnav(!nav);
  };
  return (
    <div  className="w-full h-20 mt-5">
      <div className="flex items-center justify-between">
        <h2 className="px-2 py-2 text-2xl font-bold ">Ar<span className="text-[#f1c00fef]">un.</span></h2>
        <ul className="items-center hidden text-black md:flex">
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="relative p-4 mt-2 ml-5 tracking-[1px]  cursor-pointer group"
          >
            About
            <span className="absolute inset-x-0 bottom-2 h-0.5  bg-[#f1c00fef] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
          </Link>

          <Link
            to="course"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="relative p-4 mt-2 ml-5 tracking-[1px]  cursor-pointer group"
          >
            Course
            <span className="absolute inset-x-0 bottom-2 h-0.5 bg-[#f1c00fef] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
          </Link>

          <Link
            to="testimonials"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="relative p-4 mt-2 ml-5 tracking-[1px]  cursor-pointer group"
          >
            Testimonials
            <span className="absolute inset-x-0 bottom-2 h-0.5 bg-[#f1c00fef] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
          </Link>
          <Link
            to="footer"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="relative p-4 mt-2 ml-5 tracking-[1px] cursor-pointer group"
          >
            Contact
            <span className="absolute inset-x-0 bottom-2 h-0.5 bg-[#f1c00fef] transform origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 "></span>
          </Link>

          {/* <li>About</li>
          <li>Course</li>
          <li>Testimonials</li>
          <li>Contact</li> */}
          <button className="px-6 mx-8">Enroll Now</button>
        </ul>
      </div>
      <div
        className={
          !nav
            ? "fixed  h-auto w-[100%] left-0 top-0 border-r bg-white border-r-gray-200"
            : "fixed left-[-100%]"
        }
      >
        <ul className="flex flex-col mt-[27px] md:hidden">
      
          <div
            onClick={handlenav}
            className="fixed right-0 block pr-5 top-[30px] text-black  md:hidden"
          >
            {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
          <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="p-4 text-black border-b border-gray-800 cursor-pointer"
            onClick={() => setnav(!nav)}
          >
            About
          </Link>
          <Link
            to="course"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="p-4 text-black border-b border-gray-800 cursor-pointer "
            onClick={() => setnav(!nav)}
          >
            Course
          </Link>
          <Link
            to="testimonials"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className="p-4 text-black border-b border-gray-800 cursor-pointer"
            onClick={() => setnav(!nav)}
          >
            Testimonials
          </Link>
          <Link
            to="contact"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="p-4 text-black border-b border-gray-800 cursor-pointer"
            onClick={() => setnav(!nav)}
          >
            Contact
          </Link>
          <button className="w-40 ">Enroll Now</button>
         
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
