import React from 'react'
import { MdPlayArrow } from 'react-icons/md'

function Menu() {
    const navList = ['Projects', 'Services', 'About Us', 'Careers', 'Blog']
    return (
        <div className='hidden lg:flex lg:flex-1 lg:justify-between lg:border-2 lg:h-20 lg:items-center'>
            <ul className='flex justify-between items-center cursor-pointer text-lg font-bold tracking-wider'>
                {navList.map((item, index) => <li key={index} className=' relative hover:text-[#5135FF] hover:before:content-[""] hover:before:absolute hover:before:w-[5px] hover:before:h-[5px] hover:before:border-2 hover:before:border-[#5135FF] hover:before:bg-[#5135FF] hover:before:top-[100%] hover:before:left-1/2 hover:before:rounded-full transition-all  px-2'>{item}</li>)}
            </ul>

            <MdPlayArrow className='border-2 border-white rounded-full text-4xl text-white' />

            <div className=' '>

                <button className=' px-6 pt-4 pb-3 text-center text-white  bg-[#5135FF]'>
                    Contact Us
                </button>
            </div>

        </div>
    )
}

export default Menu