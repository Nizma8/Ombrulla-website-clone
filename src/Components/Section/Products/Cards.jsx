import React from 'react'

function Cards({info}) {
  return (
    <div className='shadow rounded-lg bg-blue-200 p-12'>
      <header>
        <h1 className='text-xl'>{info.heading}</h1>
      </header>

      <section className='mt-3'>
        <p className='text-gray-500 text-lg leading-[1.25]'>{info.description}</p>
      </section>

      <section>
        <img src={info.image} alt="title-image" width={"150px"} height={"150px"} className='ml-12 my-6'/>

        <h4 className='text-lg hover:text-blue-500'>
          {info.link} <i className='fa-solid fa-up-right-from-square text-blue-500'></i>
        </h4>
      </section>
    </div>
  )
}

export default Cards