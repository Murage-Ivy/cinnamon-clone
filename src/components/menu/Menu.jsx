import React from 'react'
import { MdPlayArrow } from 'react-icons/md'

function Menu({ isScrolled }) {
    const navList = ['Projects', 'Services', 'About Us', 'Careers', 'Blog']
    console.log(isScrolled)
    return (
        <div className='hidden  lg:flex  lg:justify-between lg:h-20 lg:items-center'>
            <ul className='lg:flex lg:justify-between lg:items-center cursor-pointer text-lg  font-bold tracking-wider'
                style={{ color: isScrolled ? 'black' : 'white' }}>
                {navList.map((item, index) => <li key={index} className=' relative hover:text-[#5135FF] hover:before:content-[""] hover:before:absolute hover:before:w-[5px] hover:before:h-[5px] hover:before:border-2 hover:before:border-[#5135FF] hover:before:bg-[#5135FF] hover:before:top-[100%] hover:before:left-1/2 hover:before:rounded-full transition-all  px-2'>{item}</li>)}
            </ul>
            <div className='px-4'>
                <MdPlayArrow className=' border-2  border-white rounded-full text-4xl text-white transform transition duration-300 hover:bg-[#5135FF]  hover:scale3d-100' />
            </div>

            <div className=' pl-4'>
                <button className=' px-6 pt-4 pb-3 text-center text-white  bg-[#5135FF] hover:text-[#5135FF] hover:bg-white hover:border-2 hover:border-[#5135FF]'>
                    Contact Us
                </button>
            </div>

        </div>
    )
}

export default Menu