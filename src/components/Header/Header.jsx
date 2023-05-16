import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import Logo from '../Logo/Logo'
function Header() {
    return (
        <div className='flex h-20  items-center justify-between'>
            <Logo />
            <HiMenuAlt1 className='text-2xl cursor-pointer' />
        </div>
    )
}

export default Header