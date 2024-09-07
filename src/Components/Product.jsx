import React, { useRef } from 'react'
import img from '../assets/edu2.jpg'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react';

function Product() {

    const boxRef = useRef()
    const imgRef = useRef()
   useGSAP( ()=>{
        gsap.from(boxRef.current, {
            x: 100,
            opacity: 0,
            duration: 2,
            ease: 'power2.out',
            scrollTrigger : {
                trigger: '#box1',
                scroller : 'body',
                start: 'top 20%',
                end: 'bottom 80%',
                scrub: true,
                markers : true
            }

        })
   })

//    useGSAP( ()=> {
//     gsap.from(imgRef.current, {
//         x: -100,
//         opacity: 0,
//         duration: 2,
//         ease: 'power2.out',
//     })
//    })

useGSAP( ()=> {
    var tl = gsap.timeline( {
        repeat : 1,
        repeatDelay : 2,
    })
    tl.from(imgRef.current, {
        x : 200,
        delay : 1,
        duration: 1,
        scrollTrigger: {
            trigger : '#box2',
            scroller : 'body',
            start: 'top 20%',
            end: 'bottom 80%',
            scrub: true,
            markers : true
        }
    })
})
  return (
    <div id='main' className='flex flex-row justify-center py-12 px-20'>
        {/* this is the box 1 */}
        {/* <div id='center-div' className='w-2/6 flex flex-row'>
            <div id='box1' className=' h-auto bg-slate-300 py-8 px-4 rounded-md flex flex-col m-4 '>
                <img className='h-40 w-full' src={img} alt="" />
                <h1>Box 1</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tenetur iusto cumque iste ducimus nam, sit sed aliquam consequuntur neque corporis, dolor vel nemo ratione enim aspernatur nobis rerum eaque?</p>
            </div>
            <div className='w-full h-auto bg-slate-300 py-8 px-4 rounded-md flex flex-col m-4'>
                <img className='h-40 w-full' src={img} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tenetur iusto cumque iste ducimus nam, sit sed aliquam consequuntur neque corporis, dolor vel nemo ratione enim aspernatur nobis rerum eaque?</p>
            </div>
        </div> */}

        {/* this is the box 2 */}
        <div className='w-[80%]'>
            <div ref={boxRef} className='w-3/5 h-auto bg-slate-300 py-8 px-4 rounded-md flex flex-row m-4'>
                <img className='h-40 w-full' src={img} alt="" />
                <h1>Box 2</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tenetur iusto cumque iste ducimus nam, sit sed aliquam consequuntur neque corporis, dolor vel nemo ratione enim aspernatur nobis rerum eaque?</p>
            </div>
            <div ref={imgRef} className='box1 w-3/5 h-auto bg-slate-300 py-8 px-4 rounded-md flex flex-col m-4'>
                <img className='h-40 w-full' src={img} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur tenetur iusto cumque iste ducimus nam, sit sed aliquam consequuntur neque corporis, dolor vel nemo ratione enim aspernatur nobis rerum eaque?</p>
            </div>
        </div>
    </div>
  )
}

export default Product
