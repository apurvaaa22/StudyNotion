import React from 'react'
import HighlightText from './HighlightText'
import CTAButton from "./CTAButton"
import know_your_progress from "../../../assets/Images/Know_your_progress.png"
import compare_with_others from "../../../assets/Images/Compare_with_others.png"
import plan_your_lessons from "../../../assets/Images/Plan_your_lessons.png"

const LearningLanguageSection = () => {
  return (
    <div className='mt-[130px] mb-32'>

      <div className='flex flex-col gap-5 items-center'>
        <div className='text-4xl font-semibold text-center'>
          Your swiss knife for <HighlightText text={"Learning any Language"} />
        </div>

        <div className='text-center text-richblack-600 mx-auto text-base font-medium w-[70%]'>
          Using spim making learning multiple languages easy with 20+ languages realistic voice-over,progress
          tracking,custom schedule and more.
        </div>

        <div className='flex flex-row items-center justify-center mt-5'>
          <img src={know_your_progress} alt="know your progress image" className='object-contain -mr-32' />
          <img src={compare_with_others} alt="comapre with others image" className='object-contain' />
          <img src={plan_your_lessons} alt="plan your image" className='object-contain -ml-36' />
        </div>

        <div className='w-fit '>
          <CTAButton active={true} linkto={"/signup"}>
            <div >Learn More</div>
          </CTAButton>
        </div>

      </div>
    </div>
  )
}

export default LearningLanguageSection
