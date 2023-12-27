import React from 'react'
import Button from '../Button'

function TitleSection() {
  return (
    <main className='w-[95%] flex justify-around mt-5 items-center'>
        <div className=' w-1/2 pt-12 '>
           <p className='text-5xl font-bold leading-[1.25]'>Manual <br /> Inspection is <br /><span className='text-blue-500'>Slow & Error- <br />Prone</span></p>
           <p className='my-10 text-lg  text-gray-400'>AI visual inspection, powered by computer vision, revolutionises the inspection process in manufacturing, enhancing precision and cost-effectiveness, all the while maintaining product excellence.</p>
           <div className='flex justify-between w-1/2 '>
               <Button name = {"ScheduleCall"}/>
               <Button name= {<i class="fa-solid fa-play"></i>}/>
               <h4 className='pt-5 cursor-pointer hover:text-blue-500'>Watch Video</h4>
           </div>
        </div>
        <div className=' w-1/3'>
            <img src="https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp" alt="banner-image" className=' object-cover '   />
        </div>
    </main>
  )
}

export default TitleSection