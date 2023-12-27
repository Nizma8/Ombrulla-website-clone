import React from 'react'
import Cards from './Cards'

function ProdcutsInfo() {
    let cardInfo =[
        {
            id:1,
            heading:"Job Grading and Evaluation",
            description:"Job evaluation assesses and ranks job roles in an organization based on responsibilities and skills, often for compensation and structuring purposes.",
           image:"https://www.ombrulla.com/_astro/job-profiler.bfa7dd2f_Z10oyMd.webp",
            link:"Free Trail"
        },{
            id: 2,
            heading: "Compensation Management",
            description:
              "Compensation management software automates salary planning, budget management, and equity analysis, ensuring fair and competitive pay practices.",
            image: "https://www.ombrulla.com/_astro/Comp360.5e1e772f_23KQc0.webp",
            link: "Book For Demo",
        }
    ]
  return (
    <div className='xl:w-[95%] mx-auto my-20 w-full  md:px-12 sm:px-10'>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
        <ul className='w-full md:w-[35%] md:mr-8 lg:mr-12 mb-4 md:mb-0'>
          <li className='list my-4 md:my-6 text-center md:text-left'>PRODUCTS</li>
          <li className='text-3xl md:text-4xl my-4 md:my-6 text-center md:text-left'>Our HR Tools</li>
          <li>
            <p className='text-gray-400 text-base md:text-lg lg:text-xl text-center md:text-left'>
              Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.
            </p>
          </li>
        </ul>
        <div className='grid md:grid-cols-2 gap-3 w-[65%] grid-cols-1 '>
          {cardInfo.map((item, index) => (
            <Cards info={item} key={index} />
          ))}
        </div>
      </div>
    </div>

  )
}

export default ProdcutsInfo