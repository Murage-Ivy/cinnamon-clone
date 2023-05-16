import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

function Hero() {
    return (
        <div>
            <div className='mb-6'>
                <h1 className='text-[40px] font-extrabold text-hero_header'>Results focused <br /> design & <br /> development agency.</h1>
            </div>
            <div className='mb-8'>
                <p className='text-hero_color text-lg'>
                    Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build a momentum for your success.
                </p>
            </div>

            <div className='mx-auto max-w-[50%] '>
                <a href='https://www2.deloitte.com/ce/en/pages/about-deloitte/topics/technology-fast-50.html' target='blank'><img className="rounded-[50%] w-full" src='./assets/images/image.png' alt='' /></a>
            </div>

            <div className='relative text-hero_color flex items-start flex-col rotate-0]  ' >
                <div className=' absolute left-[-3em] bottom-[4em] rotate-[90deg] flex items-center ' >
                    <button className='text-[16px] mr-[10px]'>see our work</button>
                    <AiOutlineArrowDown className='rotate-[-90deg] ml-[px]' />
                </div>
            </div>
        </div>
    )
}

export default Hero