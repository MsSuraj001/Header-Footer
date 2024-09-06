import React from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Header() {
    useGSAP( ()=>{
        gsap.from('#box', {
           y:-20,
           duration: 1,
           opacity:0,
           delay: 0.5
        })
    })
    useGSAP( ()=>{
        gsap.from('#box2', {
           x:40,
           duration: 1,
           opacity:0,
           delay: 0.7,
           scrub : 2
        })
    })
  return (
    <div className='w-full h-[70px] bg-white shadow-lg  px-16 flex justify-between font-semibold text-2xl '>
      <div className='flex justify-center items-center'>
        <h1 id='box'>Ms Suraj</h1>
      </div>

      <div className='flex justify-center items-center'>
        <ul id='box2' className='flex justify-center items-center gap-4'>
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
