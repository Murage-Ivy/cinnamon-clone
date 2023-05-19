import React from 'react'

function CinnamonCollege() {
    const positions = ['Flutter Development Team Lead', 'Lead Generation Assistant', 'Mobile Development Team Lead',]

    const positionItems = positions.map(position => <div className='grid grid-cols-[85%_auto] items-center  border-b-2 border-gray-600 py-6 text-white'>
        <p className='text-2xl font-bold tracking-wider pr-3' >{position}</p>
        <img src='./assets/images/arrow_right.webp' alt={position} />
    </div>)
    return (<>

        <div className='bg-white px-10 pt-24 '>
            <div>
                <img src='./assets/images/cinn-college.ec0e9db3.svg' alt='college' />
            </div>

            <div className='py-16 '>
                <p className='text-base text-[#000000] font-medium'>Seize the unique opportunity to participate in a wide range of courses conducted by professionals with an impeccable reputation in the digital industry.</p>
                <button className=' mt-8 bg-[#5135FF] text-white pt-4 pb-3 px-8 h-[48px] '  >
                    See How It Works
                </button>
            </div>
        </div>

        <div className='text-white px-5 pt-20 bg-hero-pattern bg-secondary  '>
            <div className='mb-16'>
                <h2 className='font-bold text-4xl tracking-widest mb-8'>We're growing</h2>
                <p className='font-medium text-lg'>Jump on board with Cinnamon and get the privilege of working on challenging projects for leading global companies! Make the world a better, more connected place.</p>
                <a href='/careers'>
                    <button className='pt-4  px-8 pb-3 bg-[#5135FF] mt-8'>See All Positions</button>
                </a>
            </div>

            <div >
                {positionItems}
            </div>

        </div>

    </>
    )
}

export default CinnamonCollege