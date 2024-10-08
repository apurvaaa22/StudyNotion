import React from 'react'
import instructor from "../../../assets/Images/Instructor.png"
import HighlightText from './HighlightText'
import CTAButton from './CTAButton'
import { FaArrowRight } from 'react-icons/fa'

const InstructorSection = () => {
  return (
    <div className='mt-16'>
      <div className='flex flex-row gap-20 items-center'>
        <div className='w-[50%]'>
          <img src={instructor} alt="" className="shadow-white " />
        </div>
        <div className='w-[50%] flex flex-col '>
          <div className='text-4xl font-semibold'>Become an <HighlightText text={"Instructor"} /></div>
          <p className='font-medium text-[16px] w-[80%] text-richblack-300 mt-10'>Instructor from around the world teach millions of students on StudyNotion.We provide the tools and skills to teach what you love.</p>
          <div className='w-fit mt-5'>
            <CTAButton active={true} linkto={"/signup"} >
              <div className='flex flex-row gap-2 items-center '>
                Start Learning Today
                <FaArrowRight />
              </div>
            </CTAButton>
          </div>


        </div>
      </div>
    </div>
  )
}

export default InstructorSection
