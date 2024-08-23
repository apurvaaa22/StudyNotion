import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/HomePage/HighlightText'
import CTAButton from '../components/core/HomePage/CTAButton'
import video1 from "../assets/Images/banner.mp4"
import CodeBlocks from '../components/core/HomePage/CodeBlocks'
import TimelineSection from '../components/core/HomePage/TimelineSection'
import LearningLanguageSection from '../components/core/HomePage/LearningLanguageSection'
import InstructorSection from '../components/core/HomePage/InstructorSection'
import Footer from "../components/common/Footer"
import ExploreMore from '../components/core/HomePage/ExploreMore'


const Home = () => {
  return (
    <div>

      {/* Section-1 (black background)*/}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>

        {/* button */}
        <Link to={"/signup"}>

          <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200
              transition-all duration-200 hover:scale-95 w-fit'>

            <div className='flex flex-row items-center gap-2 rounded-full px-10 py-[5px] 
                 transition-all duration-200 group-hover:bg-richblack-900'>

              <p>Become an Instructor</p>
              <FaArrowRight />

            </div>

          </div>

        </Link>

        {/* heading */}
        <div className='text-center text-4xl font-medium mt-7'>
          Empower Your Future with
          <HighlightText text={"Coding Skills"} />
        </div>

        {/* subheading */}
        <div className='w-[85%] text-center text-lg font-bold text-richblack-300 mt-4 '>
          With our online coding course,you can learn at your own pace,from anywhere in thw world,and get
          access to a wealth of resources,including handes-on projects,quizzes and personalized feedback from instructors.
        </div>

        {/* 2-buttons */}
        <div className='flex flex-row gap-7 mt-8'>
          <CTAButton active={true} linkto={"/signup"}>Learn More</CTAButton>
          <CTAButton active={false} linkto={"/login"}>Book a Demo</CTAButton>
        </div>

        {/* video */}
        <div className=' my-12 mx-11 shadow-blue-200 '>
          <video muted loop autoPlay src={video1}></video>
        </div>

        {/* code section 1 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock Your
                <HighlightText text={"coding courses"} />
                with our online courses
              </div>
            }
            subheading={
              "With our online coding courses you can learn at your own pace,from anywhere in the world,and get access to a wealth of resources,including hands-on projects,quizzess and personalized feedback from instructor."
            }
            ctabtn1={
              {
                btnText: "try it yourself",
                linkto: "/signup",
                active: true,
              }

            }
            ctabtn2={
              {
                btnText: "Learn More",
                linkto: "/login",
                active: false,
              }

            }
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example\n</title>\n</head></html>`}
            codeColor={"text-yellow-25"}

          />
        </div>

        {/* code section 2 */}
        <div>
          <CodeBlocks
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock Your
                <HighlightText text={"coding courses"} />
                with our online courses
              </div>
            }
            subheading={
              "With our online coding courses you can learn at your own pace,from anywhere in the world,and get access to a wealth of resources,including hands-on projects,quizzess and personalized feedback from instructor."
            }
            ctabtn1={
              {
                btnText: "try it yourself",
                linkto: "/signup",
                active: true,
              }

            }
            ctabtn2={
              {
                btnText: "Learn More",
                linkto: "/login",
                active: false,
              }

            }
            codeblock={`<!DOCTYPE html>\n<html>\n<head><title>Example\n</title>\n</head></html>`}
            codeColor={"text-yellow-25"}

          />
        </div>

        <ExploreMore />

      </div>

      {/* Section-2 (white background)*/}
      <div className='bg-pure-greys-5 text-richblack-700'>

        <div className='homepage_bg h-[333px]'>
          <div className='w-11/12 max-w-maxContent flex flex-col items-center gap-5 mx-auto justify-between'>
            <div className='h-[150px] '></div>
            <div className='flex flex-row gap-7 text-white'>

              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3'>
                  Explore Full Catalog
                  <FaArrowRight />
                </div>
              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>Learn More</div>
              </CTAButton>
            </div>
          </div>
        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-7 '>

          <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
            <div className='text-4xl font-semibold w-[45%]'>
              Get the Skills you need for a <HighlightText text={"Job that is in demand"} />
            </div>

            <div className='flex flex-col gap-10 w-[40%] items-start'>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms.Today,to be a competative specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}><div>Learn More</div></CTAButton>
            </div>
          </div>

          <TimelineSection />

          <LearningLanguageSection />

        </div>



      </div>

      {/* Section-3 */}

      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between gap-8 bg-richblack-900 text-white'>
        <InstructorSection />
        <h2 className='text-center text-4xl font-semibold mt-10 '>Review from other Learners</h2>
        {/* review slider */}
      </div>

      {/* Footer */}
      <Footer />

    </div>
  )
}

export default Home
