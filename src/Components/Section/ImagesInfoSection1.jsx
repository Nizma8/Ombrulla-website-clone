import React from 'react';
import Button from '../Button';

function ImagesInfoSection1({ details }) {
  const selectedItems = details[3];

  return (
    <section className='w-full lg:w-[40%] py-10 lg:py-28'>
      <ul>
        <li className='font-bold my-3 text-2xl h-3 text-white'>{selectedItems.contents.title}</li>
        <li className='text-xl text-white'>{selectedItems.contents.acronym}</li>
        <p className='mt-5 text-white text-4xl font-bold'>{selectedItems.contents.description}</p>
        <p className='text-lg mt-5 text-white'>{selectedItems.contents.additionalDetails}</p>
      </ul>
      <div className='inline-flex  flex-row items-center mt-6 text-white '>
        <Button name={'Schedule Call'} isSpecialEffect={true} className='lg:mr-3 mb-3 lg:mb-0' />
        <Button name={<i className='fa-solid fa-play'></i>} isSpecialEffect={true} />
        <h4 className='ml-3 hover:text-blue-500 text-white lg:mt-0'>
          Watch Video
        </h4>
      </div>
    </section>
  );
}

export default ImagesInfoSection1;
