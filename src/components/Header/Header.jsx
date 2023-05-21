import React, { useState } from 'react'
import { HiMenuAlt1 } from 'react-icons/hi'
import Logo from '../Logo/Logo'
import Menu from '../menu/Menu'

function Header() {
    const [isScrolled, setIsScrolled] = useState(false)

    document.addEventListener("scroll", () => {
        let bodyTopPosition = document.body.getBoundingClientRect().top
        if (bodyTopPosition < -100) {
            setIsScrolled(true)
        }
        else {
            setIsScrolled(false)
        }

    })
    return (
        <div className='sticky p-0 top-0 z-10 px-24 w-full  flex h-20 bg-hero-pattern bg-secondary transition-all duration-200  items-center justify-between'
            style={isScrolled ? { background: 'rgba(255,255,255)', color: 'black' } : null}>
            <Logo />
            <Menu isScrolled={isScrolled} />
            <HiMenuAlt1 className='text-2xl cursor-pointer text-hero_header lg:hidden' />

        </div>
    )
}

export default Header