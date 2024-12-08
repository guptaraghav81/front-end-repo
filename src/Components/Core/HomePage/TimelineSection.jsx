import React from 'react';
import Logo1 from "../../../assets/TimeLineLogo/Logo1.svg";
import Logo2 from "../../../assets/TimeLineLogo/Logo2.svg";
import Logo3 from "../../../assets/TimeLineLogo/Logo3.svg";
import Logo4 from "../../../assets/TimeLineLogo/Logo4.svg";
import TimeLineImage from "../../../assets/Images/TimelineImage.png";
import "../../../App.css";

const TimeLineLogo = [
    {
        logo: Logo1,
        title: "Leadership",
        content: "Fully committed to the success of the company",
    },
    {
        logo: Logo2,
        title: "Responsibility",
        content: "Students will always be our top priority",
    },
    {
        logo: Logo3,
        title: "Flexibility",
        content: "The ability to adapt is an important skill",
    },
    {
        logo: Logo4,
        title: "Problem Solving",
        content: "Code your way to a solution",
    },
];

const TimelineSection = () => {
    return (
        <div className='w-11/12 mx-auto mt-20'>

            <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8'>

                {/* Logos and Content */}
                <div className='w-full md:w-[60%]'>
                    {TimeLineLogo.map((item, index) => (
                        <div className='flex items-center gap-4 pb-6' key={index}>
                            <div className='w-12 h-12 md:w-[3rem] md:h-[3rem] rounded-full flex justify-center items-center shadow-md shadow-richblack-400'>
                                <img src={item.logo} alt="Logo" className='w-8 h-8 object-contain' />
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-lg md:text-xl font-semibold text-richblack-700'>{item.title}</p>
                                <p className='text-base md:text-lg text-richblack-700 font-semibold opacity-80 font-inter'>{item.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Image Section */}
                <div className='relative w-full md:w-[40%] shadow-lg shadow-blue-300'>
                    <img src={TimeLineImage} alt="Timeline" className='w-full' />
                    <div className='absolute bottom-0 left-0 bg-caribbeangreen-600 text-white py-4 px-6 md:px-10 rounded-tl-lg md:rounded-bl-lg'>
                        <div className='flex items-center gap-3'>
                            <div className='border-r-2 border-richblack-200 pr-3 md:pr-5'>
                                <p className='text-2xl md:text-3xl font-bold'>10</p>
                                <p className='text-base md:text-lg font-semibold text-caribbeangreen-200'>Years of Experience</p>
                            </div>
                            <div>
                                <p className='text-2xl md:text-3xl font-bold'>1000+</p>
                                <p className='text-base md:text-lg font-semibold text-caribbeangreen-200'>Students</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default TimelineSection;
