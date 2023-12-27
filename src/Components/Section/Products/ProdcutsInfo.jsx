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
    <div className='w-[95%] flex justify-center items-center my-20'>
         <div className=' flex  justify-around w-[95%] items-center'>
                <div>
                    <ul>
                        <li className='list'>PRODUCTS</li>
                        <li>Our HR Tools</li>
                        <li><p>Our job grading and evaluation tool, combined with the compensation management tool, is a highly effective SaaS-based solution. It greatly assists HR consultants and managers in carrying out their roles with efficiency and precision.
</p></li>
                    </ul>
                </div>
                <div className='grid grid-cols-2 gap-3'>
                      {
                        cardInfo.map((item,index)=>{
                            return(
                                <Cards info={item} key={index}/>
                            )
                        })
                      }
                </div>
            </div></div>
  )
}

export default ProdcutsInfo