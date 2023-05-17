import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import Logo from '../Logo/Logo'
function Header() {
    return (
        <div className='px-5 sticky p-0 top-0 z-10 bg-red-300 flex h-20  items-center justify-between'>
            <Logo />
            <HiMenuAlt1 className='text-2xl cursor-pointer text-hero_header' />
        </div>
    )
}

export default Header