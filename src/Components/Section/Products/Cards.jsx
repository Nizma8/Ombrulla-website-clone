import React from 'react'

function Cards({info}) {
  return (
    <div className='shadow rounded-lg bg-blue-200 p-4 md:p-8 lg:p-12'>
    <header>
      <h1 className='text-lg md:text-xl lg:text-2xl'>{info.heading}</h1>
    </header>

    <section className='mt-3'>
      <p className='text-gray-500 text-base md:text-lg lg:text-xl'>{info.description}</p>
    </section>

    <section>
      <img src={info.image} alt="title-image" className='ml-4 md:ml-8 my-4 md:my-6' />

      <h4 className='text-base md:text-lg lg:text-xl hover:text-blue-500'>
        {info.link} <i className='fa-solid fa-up-right-from-square text-blue-500'></i>
      </h4>
    </section>
  </div>
  )
}

export default Cards