import React from 'react';
import instructor from "../../../assets/Images/Instructor.png";
import HighLightedText from "./HighLightedText";
import CTAButton from "./Button";
import { FaArrowRight } from "react-icons/fa";

const InstructorSection = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 items-center mt-16'>
      <div className='w-full md:w-[50%]'>
        <img src={instructor} alt="Instructor" className='w-full shadow-lg shadow-richblue-200' />
      </div>
      <div className='w-full md:w-[50%] flex flex-col gap-6 items-start'>
        <div className='text-3xl md:text-4xl font-semibold'>
          Become an <HighLightedText text={"Instructor"} />
        </div>
        <div className='text-richblack-600 md:w-[90%] text-base font-medium'>
          Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.
        </div>
        <CTAButton active={true} Linkto={"/signup"}>
          <div className='flex items-center'>
            Start Learning Today <FaArrowRight className='ml-2' />
          </div>
        </CTAButton>
      </div>
    </div>
  );
};

export default InstructorSection;
