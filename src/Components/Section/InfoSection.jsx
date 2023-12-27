import React from 'react'
import Button from '../Button'

function InfoSection() {
  return (
    <div className='w-[95%] flex justify-center items-center my-20 mx-auto'>
         <div className=' flex flex-col justify-around w-[95%] items-center bg-blue-100 rounded-xl shadow'>
            <ul className=' w-3/4 pt-28 pb-32'>
                <li className='list pb-8 font-bold'>The Best AI Service Provider</li>
                <li className='text-5xl pb-8 font-semibold'>Crafting Tomorrow's World with<span className='text-blue-500'> AI Excellence</span></li>
                <li className='text-lg  text-gray-400 pb-8 '>
                    The majority of customers lack data-driven insights and automation. Using AI, Ombrulla assist clients in extracting data from diverse sources such as photos, videos, and data lakes, which can assist businesses in making data-driven insights and improving their bottom line.
                </li>
                <li className=''>
                <Button name= {<i class="fa-solid fa-play"></i>}/>
                   <p className=' inline-block ml-3 hover:text-blue-500 cursor-pointer'> Watch Corporate Video</p>
                </li>
            </ul>
         </div>
    </div>
  )
}

export default InfoSection  