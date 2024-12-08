import React from 'react'
import HighLightedText from '../HomePage/HighLightedText'
import CTABtn from "../HomePage/Button"
const learningGrid = [
    {
        order: -1,
        heading: "World-Class Learning for",
        HighLightedText: "Anyone, Anywhere",
        description: "Studynotion partners with more than 275+ leading universities and companies to bring flexible, affordable, job-relevant online learning to individuals and organizations worldwide.",
        BtnText: "Learn More",
        BtnLink: "/",
    },
    {
        order: 1,
        heading: "Curriculum Based on Industry Needs",
        description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order: 2,
        heading: "Our Learning Methods",
        description: "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
    {
        order: 3,
        heading: "Certification",
        description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order: 4,
        heading: 'Rating "Auto-grading"',
        description: "Save time and money! The Belajar curriculum is made to be easier to understand and in line with industry needs.",
    },
    {
        order: 5,
        heading: 'Ready to Work"',
        description: "Studynotion partners with more than 275+ leading universities and companies to bring",
    },
]

const LearningGrid = () => {
  return (
    <div className=' w-10/12 mt-20 grid mx-auto grid-cols-1 lg:grid-cols-4 mb-10 items-center justify-center'>
        {
            learningGrid.map((card,index) => {
                return (
                    <div key={index} className={` ${index === 0 && "lg:col-span-2"} ${card.order %2 === 1 ? "bg-richblack-700" : "bg-richblack-800"} ${card.order === 3 && "lg:col-start-2"} ${card.order === -1 && "bg-richblack-900"} lg:h-[280px]`}>
                        {
                            card.order < 0 ? (
                                <div className='flex flex-col gap-4 w-[90%] items-start'>
                                    <div className='text-4xl font-semibold'>
                                        {card.heading} <HighLightedText text={card.HighLightedText}/>
                                    </div>
                                    <p className='text-richblack-200'>{card.description}</p>
                                    <CTABtn Linkto={card.BtnLink} active={true}>{card.BtnText}</CTABtn>
                                </div>
                            ) : (
                                <div className='flex flex-col gap-10 h-full  p-8'>
                                    <h2 className='text-xl font-semibold'>
                                        {card.heading}
                                    </h2>
                                    <p className='text-richblack-200'>
                                        {card.description}
                                    </p>
                                </div>
                            )
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default LearningGrid