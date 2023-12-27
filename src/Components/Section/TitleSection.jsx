import React from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'

function TitleSection() {
  return (
    <main className='w-full flex flex-col md:flex-row items-center justify-center mt-5 mx-auto'>
    <div className='w-full md:w-1/2 text-center'>
      <p className='text-4xl md:text-5xl font-bold leading-[1.25] md:text-start'>
        Manual <br /> Inspection is <br />
        <span className='text-blue-500'>Slow & Error- <br />Prone</span>
      </p>
      <p className='my-6 md:my-10 text-lg text-gray-400 md:text-start'>
        AI visual inspection, powered by computer vision, revolutionizes the inspection process in manufacturing, enhancing precision and cost-effectiveness, all the while maintaining product excellence.
      </p>
      <div className='flex flex-col items-center justify-center md:justify-around w-full md:w-full lg:w-[50%]  md:flex-row '>
        <Button name='Schedule Call' />
        <Button name={<i className='fa-solid fa-play'></i>} />
       <Link to={'#'}> <h4 className='pt-5 md:pt-0 cursor-pointer hover:text-blue-500'>Watch Video</h4></Link>
      </div>
    </div>
    <div className='w-full mt-6 md:w-[75%] md:mt-0 xl:w-1/3 lg:w-1/2'>
      <img
        src='https://www.ombrulla.com/_astro/ai-visual-inspection_banner_1.f3232628_ZyIKMH.webp'
        alt='banner-image'
        className='object-cover w-full'
      />
    </div>
  </main>
  )
}

export default TitleSection