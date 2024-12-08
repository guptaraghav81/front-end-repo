import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import HighLightedText from "../Components/Core/HomePage/HighLightedText";
import HighLightedText2 from "../Components/Core/HomePage/HighLightedText2";
import CTAButton from "../Components/Core/HomePage/Button";
import Banner from "../assets/Images/HeroVideoBanner.mp4"
import CodeBlocks from "../Components/Core/HomePage/CodeBlocks";
import "../App.css"
import TimelineSection from "../Components/Core/HomePage/TimelineSection";
import LearningLanguageSection from "../Components/Core/HomePage/LearningLanguageSection";
import InstructorSection from "../Components/Core/HomePage/InstructorSection";
import Footer from "../Components/common/Footer";
import ExploreMore from "../Components/Core/HomePage/ExploreMore";
import ReviewSlider from "../Components/common/ReviewSlider";
import "../App.css"
const Home = () => {
    return (
        <div className="">
          {/* Section 1 */}
          <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">

            {/* Instructor Button */}
            <div className="flex mt-6 lg:mt-20 mb-18 lg:flex-row flex-col items-center w-full">
              <div className="flex flex-col w-[70%] items-start">
            <Link to={"/signup"}>
              <div className="group mt-12 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all duration-200 hover:scale-95 w-fit">
                <div className="flex flex-row items-center gap-2 px-11 py-[5px] rounded-full transition-all duration-200 group-hover:bg-richblack-900">
                  <p className="items-start">Become an Instructor</p>
                  <FaArrowRight />
                </div>
              </div>
            </Link>
            {/* Heading */}
            <div className=" text-4xl font-semibold mt-6">
              Empower your Future with <HighLightedText text={"Coding Skills"}/>
            </div>
            {/* SubHeading */}
            <div className="w-[85%] text-semibold mt-6 text-richblack-300 gradient-to-br from-[#833AB4] via-[#FD1D1D] to-[#FCB045]">
              With our online coding courses, you can learn at your own pace, from anywhere in the world, and get access to a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
            </div>
            {/* Buttons */}
            <div className="flex flex-wor gap-6 mt-8">
              <CTAButton active={true} Linkto={"/signup"}>Learn More</CTAButton>
              <CTAButton active={false} Linkto={"/login"}>Book a Demo</CTAButton>
            </div>
            {/* Video */}
            </div>
            <div className="w-[70%] mx-3 my-11 shadow-2xl shadow-blue-400 h-fit">
              <video muted loop autoPlay className="w-full h-full">
                <source src={Banner} type="video/mp4" />
              </video>
            </div>
            </div>
            {/* Code Section 1 */}
            <div className="w-[93%]">
              <CodeBlocks
                 position={"lg:flex-row"}
                 heading={<div className="text-4xl font-semibold">Unlock Your <HighLightedText text={"coding potential"}/> with our online courses</div>}
                 subHeading={"Our courses are designed and taught by industry experts who have years of experience in coding and are passionate about sharing their knowledge with you."}
                 ctabtn1={
                  {
                    text: "Try it Yorself",
                    Linkto: "/signup",
                    active:true,
                  }
                 }
                 ctabtn2={
                  {
                    text: "Learn more",
                    Linkto: "/login",
                    active:false,
                  }
                 }
codeblock={`app.get("/", (req,res) => {
        return res.status(200).json({
             success:true,
             message:"Your Server is up and running...."
      })
})

app.listen(PORT, () => {
          console.log("Server is running at http://localhost:4000");
})`}

                 codeColor={"text-yellow-25"}
              />
            </div>

            {/* Code Section 2 */}
            <div className="w-[93%]">
              <CodeBlocks
                 position={"lg:flex-row-reverse"}
                 heading={<div className="text-4xl font-semibold">Start <HighLightedText text={"coding in seconds"}/></div>}
                 subHeading={"Go ahead, give it a try. Our hands-on learning environment means you'll be writing real code from your very first lesson."}
                 ctabtn1={
                  {
                    text: "Continue Lesson",
                    Linkto: "/signup",
                    active:true,
                  }
                 }
                 ctabtn2={
                  {
                    text: "Learn more",
                    Linkto: "/login",
                    active:false,
                  }
                 }
codeblock={`import React from 'react'
import {Link} from 'react-router-dom'
const Button = ({children, active}) => {
  return (
    <Link to={"/signup"}>
        <div className={"text-center hover:scale-95"}>
            {children}
        </div>
    </Link>
  )
}`}

                 codeColor={"text-[#60a5fa]"}
              />
            </div>
            <div>
            <ExploreMore/>
            </div>
          </div>
          {/* Section 2 */}
          <div className=" bg-pure-greys-5 text-richblack-700 pb-20">

            <div className="homepage_bg h-[333px]">
              <div className=" w-11/12 max-w-maxContent h-[100%] flex items-end gap-5 mx-auto">
                <div className="flex gap-7 text-white mx-auto mb-[4rem]">
                  <CTAButton Linkto={"/signup"} active={true}>
                    <div className="flex items-center gap-3">Explore Full Catelog <FaArrowRight/></div>
                  </CTAButton>
                  <CTAButton Linkto={"/login"} active={false}>
                    <div>Learn More</div>
                  </CTAButton>
                </div>
              </div>
            </div>

            <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center justify-between mt-10">
      <div className="flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left lg:w-1/2">
          <div className="text-4xl font-semibold">
            Get the Skills you need for a <HighLightedText2 text={"Job that is in demand"} />
          </div>
          <div className="font-bold text-lg mt-4">
            The modern Coding & Coffee is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
          </div>
        </div>
        <div className="flex flex-col lg:w-1/2 mt-6 lg:mt-0 lg:pl-8 gap-7 items-center lg:items-start">
          <CTAButton Linkto={"/login"} active={true}>Learn More</CTAButton>
        </div>
      </div>
    </div>

            <TimelineSection/>
            <LearningLanguageSection/>
          </div>
          
          {/* Section 3 */}
          <div className="relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between">
            <InstructorSection/>
          </div>

          <div className="mx-auto w-10/12">
          <h2 className="text-4xl text-center text-richblack-5 mt-20"><HighLightedText text={"Reviews from Other Learners"}/></h2>
            <ReviewSlider/>
            </div>
          
          {/* Section 4 */}
          <Footer/>
          
        </div>
    )
}

export default Home