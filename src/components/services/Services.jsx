import React from 'react'

function Services() {

    const serviceList = [{
        id: 1,
        title: 'Product design',
        description: 'Producing, prototyping and testing sketches, high-fidelity wireframes and the final UI is a process that results in intuitive and impactful design that’s easy on the eyes.',
        image: './assets/images/image_service_1.webp'
    },
    {
        id: 2,
        title: 'Development',
        description: "By selecting the befitting tech stack and architecture for the deliverable in question, we build out the product until it's a fully-fledged digital solution.",
        image: './assets/images/image_service_4.webp'
    },
    {
        id: 3,
        title: 'Quality assurance',
        description: 'Our QA engineering team makes your product bug-free, bulletproof and performance-driven through both automatic and manual testing. ',
        image: './assets/images/image_service_3.webp'
    },
    {
        id: 4,
        title: 'Marketing & growth',
        description: 'By understanding the mechanics of digital marketing, we make sure to put your product, at the right time, in front of the right people.',
        image: './assets/images/image_service_2.webp'
    }
    ]

    const serviceItems = serviceList.map(service => <div key={service.id} className='leading-10'>
        <div className='w-12 h-12 mt-8'>
            <img className="w-full" src={service.image} alt={service.title} />
        </div>
        <div>
            <h5 className='pt-6 pb-4 text-xl text-[#FFFFFF] font-bold tracking-widest'>{service.title}</h5>
        </div>
        <div>
            <p className='text-base  text-hero_color'>{service.description}</p>
        </div>
    </div>)
    return (
        <>
            <div className='py-24 px-5'>
                <div>
                    <h2 className='text-hero_header text-4xl font-bold pb-8 '>Our services</h2>
                    {serviceItems}
                    <div className='mt-12'>
                        <button className="transition-shadow duration-400 ease-in-out delay-0 hover:shadow-inset-white outline-none px-8 pt-4 pb-3 bg-[#5135FF] text-[#ffffff]  text-base font-medium hover:bg-white hover:border-2 border-[#5135FF] hover:text-[#5135FF]">
                            See Our Services
                        </button>
                    </div>
                </div>
            </div>

            <div className='pb-24 grid gap-8 grid-rows-[1fr 1fr 1fr] auto grid-cols-4 bg-white px-5'>
                <div className='col-span-4'>
                    <h2 className='  text-black text-4xl font-bold pt-24 pb-8 '>Agile team <br /> on demand</h2>
                </div>

                <div className='col-span-4 '>
                    <img src='./assets/images/image_agile.webp' alt='agile' />
                </div>

                <div className='col-span-4'>
                    <p className='text-base text-[#525252] font-medium'>
                        By hiring and managing talented people with skills specific to your project, we build you a team that’s accomplished, agile and scalable in both directions.
                    </p>
                </div>

                <div className='row-span-1 col-span-4'>
                    <button className='transition-shadow duration-400 ease-in-out delay-0 hover:shadow-inset-white outline-none px-8 pt-4 pb-3 bg-[#5135FF] text-white  text-base font-medium hover:bg-white hover:border-2 border-[#5135FF] hover:text-[#5135FF]'>See How It Works</button>
                </div>

            </div>
        </>
    )
}

export default Services