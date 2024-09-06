import React from 'react'

function Header() {
  return (
    <div className='w-full h-[70px] bg-blue-900 px-16 flex justify-between font-semibold text-xl text-white'>
      <div className='flex justify-center items-center'>
        <h1>Ms Suraj</h1>
      </div>

      <div className='flex justify-center items-center'>
        <ul className='flex justify-center items-center gap-4'>
            <li className=''>Home </li>
            <li>About</li>
            <li>Service</li>
            <li>Help</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
