import React from 'react'
import Button from '../Button'
import ImagesInfoSection1 from './ImagesInfoSection1'
import { Link } from 'react-router-dom'

function ImageInfoSection({details,id,infoFirst}) {
    // to find items mathing id
    const selectedItems = details.find(item=>item.id === id)
    const {title,heading,infos} = selectedItems.contents
  return (
    <div className={`w-[95%] xl:flex justify-around mt-5 items-center my-20 mx-auto lg:flex md:flex py-10  bg-blue-100 md:bg-none  rounded-lg ${id ===4?'bg-blue-700 w-[100%] p-2 ':'bg-none' }`}>
  {infoFirst ? (
    <>
     {id===4 ?<ImagesInfoSection1 details = {details} />: 
     <section className='xl:w-[40%] lg:w-[50%] w-[100%] md:[50%] '>
        <ul>
          <li className='list font-bold my-3'>{title}</li>
          <li className='text-5xl leading-[1.25]'>{heading}</li>
          <ul className='mt-5'>
            {infos?.map((item, index) => (
              <li key={index}>
                <p className='font-bold inline-block list-circle text-lg'>
                  {item.heading}: <span className='font-normal'>{item.content}</span>
                </p>
              </li>
            ))}
          </ul>
        </ul>
        <div className='inline-flex items-center mt-6'>
          <Button name={"ScheduleCall"} />
          <Link to={'#'}>
              <h4 className='ml-3 hover:text-blue-500'>
                Read More <i className="fa-solid fa-up-right-from-square ml-1 text-blue-500"></i>{" "}
              </h4>
          </Link>
        </div>
      </section>
      }
      <article className='xl:w-[40%] lg:w-[50%] w-[100%] md:[50%] sm:[50%] '>
        <img src={selectedItems.image} alt="image" className='object-cover w-full ' />
      </article>
    </>
  ) : (
    <>
      <article className='xl:w-[40%] lg:w-[50%] w-[100%] md:[50%]  '>
        <img src={selectedItems.image} alt="image" className='object-cover w-full' />
      </article>
      <section className='xl:w-[40%] lg:w-[50%] w-[100%] md:[50%]'>
        <ul>
          <li className='list font-bold'>{title}</li>
          <li className='text-5xl leading-[1.25]'>{heading}</li>
          <ul className='mt-5'>
            {infos.map((item, index) => (
              <li key={index}>
                <p className='font-bold inline-block list-circle text-lg'>
                  {item.heading}: <span className='font-normal'>{item.content}</span>
                </p>
              </li>
            ))}
          </ul>
        </ul>
        <div className='inline-flex items-center mt-6'>
          <Button name={"ScheduleCall"} />
          <h4 className='ml-3 hover:text-blue-500'>
            Read More <i className="fa-solid fa-up-right-from-square ml-1 text-blue-500"></i>{" "}
          </h4>
        </div>
      </section>
    </>
  )}
</div>

  )
}

export default ImageInfoSection