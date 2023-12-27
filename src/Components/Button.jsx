import React from 'react'

function Button({name,isSpecialEffect}) {
  const buttonClasses = `px-4 py-2 text-xl ${name === "ScheduleCall" ? 'rounded-2xl border' : 'rounded-full text-3xl'} ${isSpecialEffect ? 'border-white bg-inherit hover:text-black hover:border-white' : 'bg-blue-500 text-white hover:text-blue-500 hover:border-blue-900 hover:bg-inherit'}`;


  return (
    <button className={buttonClasses}>{name}</button>

  )
}

export default Button