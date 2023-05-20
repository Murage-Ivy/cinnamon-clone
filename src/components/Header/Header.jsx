import React from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import Logo from '../Logo/Logo'
import Menu from '../menu/Menu'
function Header() {
    return (
        <div className='px-5 sticky p-0 top-0 z-10 bg-red-300 flex h-20  items-center justify-between  '>
            <Logo />
            <Menu />
            <HiMenuAlt1 className='text-2xl cursor-pointer text-hero_header lg:hidden' />

        </div>
    )
}

export default Header