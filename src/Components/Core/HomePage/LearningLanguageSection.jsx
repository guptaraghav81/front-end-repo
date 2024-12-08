import React from 'react';
import HighLightedText2 from './HighLightedText2';
import knowYourProgress from "../../../assets/Images/Know_your_progress.png";
import compareWithOther from "../../../assets/Images/Compare_with_others.png";
import planYourLessons from "../../../assets/Images/Plan_your_lessons.png";
import CTAbutton from "./Button";

const LearningLanguageSection = () => {
  return (
    <div className='mt-20 md:mt-32 w-11/12 mx-auto'>
      <div className='flex flex-col gap-4 md:w-3/4 mx-auto'>
        <div className='text-3xl md:text-4xl font-semibold text-center'>
          Your Swiss Knife for <HighLightedText2 text={"learning any language"} />
        </div>
        <div className='text-center text-richblack-600 md:text-base font-medium'>
          Using spin making learning multiple languages easy, with 20+ languages, realistic voice-over, progress tracking, custom schedule, and more.
        </div>
        {/* Boxes */}
        <div className='flex flex-col md:flex-row items-center justify-center mt-4 md:space-x-8'>
          <img src={knowYourProgress} alt="knowYourProgress" className='mb-4 md:mb-0 md:-mr-24' />
          <img src={compareWithOther} alt="compareWithOthers" className='mb-4 md:mb-0 md:-mr-24' />
          <img src={planYourLessons} alt="planYourLessons" className='mb-4 md:mb-0' />
        </div>
        <div className='flex justify-center items-center mt-4'>
          <CTAbutton active={true} Linkto={"login"}>Learn More</CTAbutton>
        </div>
      </div>
    </div>
  );
};

export default LearningLanguageSection;
