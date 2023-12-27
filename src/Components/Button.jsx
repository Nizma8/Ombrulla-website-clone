import React from 'react'

function Button({name}) {
  return (
    <button className={`border px-4 py-2 bg-blue-500 text-white  hover:text-blue-500 hover:border-blue-900 hover:bg-white text-xl ${name === "ScheduleCall"?'rounded-2xl':'rounded-full text-3xl'}`}>{name}</button>
  )
}

export default Button