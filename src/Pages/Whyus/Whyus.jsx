import React from "react";
import { PiCertificate } from "react-icons/pi";
import { FaClock } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { HiOutlineLightBulb } from "react-icons/hi";
import { FaPeopleGroup } from "react-icons/fa6";

const Whyus = () => {
  return (
    <div className="w-full h-screen text-center">
      <div className="flex items-center justify-center">
        <h1 className="text-2xl text-blue-500">Why to Choose us</h1>
      </div>
      <div className="max-w-[500px] mx-auto py-5">
        <h1 className="text-4xl font-bold ">
          Why to Launch a Career in Journalism{" "}
        </h1>
      </div>
      <div className="max-w-[700px] mx-auto">
        <p className="text-center">
        Welcome to our Journalism Unveiled Course, where you'll uncover the secrets of impactful storytelling and acquire practical skills to thrive in the ever-evolving field of journalism.
        </p>
      </div>

      <div className="flex flex-wrap items-center justify-center gap-10 mx-auto my-20">
        <div className="flex flex-col w-[300px] gap-4  ">
          <div className="flex items-center justify-center">
            <FaPeopleGroup className="text-blue-500 " size={20} />
          </div>

          <h1 className="font-bold">Learn from Experts</h1>
          <p>
            Our course covers wide range of topics like Social
            Issue,Politics,Technology
          </p>
        </div>
        <div className="flex flex-col w-[300px] gap-4">
          <div className="flex items-center justify-center ">
          <HiOutlineLightBulb className="text-blue-500" size={20} />
        </div>

        <h1 className="font-bold">Learn from Experts</h1>
        <p>
          Our course covers wide range of topics like Social
          Issue,Politics,Technology
        </p>
      </div>
      <div className="flex flex-col w-[300px] gap-4">
        <div className="flex items-center justify-center">
          <PiCertificate className="text-blue-500" size={20} />
        </div>

        <h1 className="font-bold">Learn from Experts</h1>
        <p>
          Our course covers wide range of topics like Social
          Issue,Politics,Technology
        </p>
      </div>
      <div className="flex flex-col w-[300px] gap-4 ">
        <div className="flex items-center justify-center">
          <FaClock className="text-blue-500" size={20} />
        </div>

        <h1 className="font-bold">Learn from Experts</h1>
        <p>
          Our course covers wide range of topics like Social
          Issue,Politics,Technology
        </p>
      </div>
      <div className="flex flex-col w-[300px] gap-4 ">
        <div className="flex items-center justify-center">
          <CgProfile className="text-blue-500" size={20} />
        </div>

        <h1 className="font-bold">Learn from Experts</h1>
        <p>
          Our course covers wide range of topics like Social
          Issue,Politics,Technology
        </p>
      </div>
    </div>
    </div>
  );
};

export default Whyus;
