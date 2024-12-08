import React from 'react'
import CTAButton from './Button'
import HighLightedText from './HighLightedText'
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';

const CodeBlocks = ({position, heading, subHeading, ctabtn1, ctabtn2, codeblock, backgroundGradient, codeColor}) => {
  return (
    <div className={`flex ${position} my-20 justify-center flex-col lg:gap-10 gap-10 items-center`}>
        {/* Section1 */}
        <div className='w-[100%] lg:w-[50%] flex flex-col gap-8'>
            {heading}
            <div className='text-richblack-300 font-bold'>
            {subHeading}
            </div>
            <div className='flex gap-7 mt-7'>
                <CTAButton active={ctabtn1.active} Linkto={ctabtn1.Linkto}>
                    <div className='flex gap-2 items-center'>
                        {ctabtn1.text}
                    <FaArrowRight/>
                    </div>
                </CTAButton>

                <CTAButton active={ctabtn2.active} Linkto={ctabtn2.Linkto}>
                        {ctabtn2.text}
                </CTAButton>

            </div>
        </div>
        {/* Section2 */}
        <div className='w-[100%] lg:w-[50%] flex h-fit shadow shadow-white p-4 '>
            <div className='w-[10%] text-center flex flex-col text-richblack-400 font-inter font-bold'>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
                <p>11</p>
                <p>12</p>
            </div>

            <div className={`w-[90%] flex flex-col gap-2 font-bold font-mono ${codeColor} pr-2`}>
                <TypeAnimation sequence={[codeblock, 5000, ""]}
                               repeat={Infinity}
                               cursor={true}
                               omitDeletionAnimation
                               style={{
                                whiteSpace:`pre-wrap`,
                                display:`block`,
                               }}

                />
            </div>
        </div>
    </div>
  )
}

export default CodeBlocks