import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button
       className='bg-gradient-to-b from-rose-400 to-red-600 text-white px-8 py-3 rounded-lg md:text-lg text-md transition-all duration-300 hover:scale-105 hover:to-red-700 mt-3 '>
             {props.content}
       </button>
    </div>
  )
}

export default Button
