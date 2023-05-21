import React from 'react'


function Logo({ isScrolled }) {
    console.log(isScrolled)
    return (
        <div className='w-[50%] lg:w-[10%]'>
            {isScrolled ? <img className='max-w-full ' src='./assets/images/logo-light.svg' alt='logo' /> : <img className='max-w-full' src='./assets/images/logo-dark.09b72b20.svg' alt='logo' />}
        </div>
    )
}

export default Logo