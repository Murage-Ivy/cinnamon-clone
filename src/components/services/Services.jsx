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

    const positionList = ['Web development', 'Mobile development', 'Quality assurance', 'Marketing', 'Project management', 'Human resources', 'Sales', 'Fluffy friends']

    const positionItems = positionList.map((position, index) => <div className=' transition-all topic-hover relative py-4 hover:text-[#5135FF] hover:before:content-[""] hover:before:border-2 hover:before:border-[#5135FF] hover:before:w-[8%] hover:before:absolute hover:before:top-[50%] cursor-pointer' key={index}>
        <p className="text-xl font-bold tracking-wider hover:pl-14 transition-all topic-hover  " >{position}</p>
    </div>)

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
            <div className='py-24  px-10 bg-hero-pattern bg-secondary '>
                <div>
                    <h2 className='text-hero_header text-4xl font-bold pb-8 '>Our services</h2>
                    {serviceItems}
                    <div className='mt-12'>
                        <button className=" transition-shadow duration-400 ease-in-out delay-0 hover:shadow-inset-white outline-none px-8 pt-4 pb-3 bg-[#5135FF] text-[#ffffff]  text-base font-medium hover:bg-white hover:border-2 border-[#5135FF] hover:text-[#5135FF]">
                            See Our Services
                        </button>
                    </div>
                </div>
            </div>

            <div className='pb-24 grid gap-8 grid-rows-[1fr 1fr 1fr] auto grid-cols-4 bg-[#F7F7F7]  px-10'>
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


            <div className='bg-white py-24 px-10 flex flex-col'>
                <div className=''>
                </div>
                <div className='mb-8'>
                    <h3 className='text-[#222222] text-3xl font-bold'>
                        Their team’s design <br /> skills definitely set <br /> them apart.
                    </h3>
                </div>
                <div className='mb-8'>
                    <p className='font-[500] text-lg'>
                        Wonderful experience; the project manager and the designer were available for all my questions and at no point did I feel they struggle to create the design.The result is a-b-s-o-l-u-t-e-l-y perfect. Top-notch!
                    </p>
                </div>

                <div className='flex flex-col items-stretch justify-center'>
                    <img className='w-[20%] my-4' src='./assets/images/image_profile_avatar.webp' alt='testimonial' />
                    <h5 className='font-bold text-xl'>Eric C</h5>
                    <p className='text-base font-medium'>Founder Websun Solutions UG. Berlin, Germany</p>
                </div>

                <div className='flex items-center justify-between w-1/2 mt-10'>
                    <img className="w-[30%]" src='./assets/images/image_arrow_2.webp' alt='arrow 1' />
                    <img className="w-[30%]" src='./assets/images/image_arrow_1.webp' alt='arrow 2' />
                </div>
            </div>

            <div className='pb-24  bg-[#F7F7F7]  px-10 md:grid md:grid-cols-2 md:items-center'>
                <div>
                    <h2 className='  text-black text-4xl font-bold pt-24 pb-8 '>Who We are</h2>

                    <div className='pt-8 pb-12'>
                        <p className='relative text-[#5135FF] before:content-[""] before:border-2 before:border-[#5135FF] before:w-[15%] sm:before:w-[8%] before:absolute before:top-[50%] sm:before:top-[35%] before:left-0 font-bold tracking-widest pl-16'>Product design</p>
                    </div>

                    <div className='mt-8 md:order-1 md:block hidden' >{positionItems}</div>

                </div>

                <div className='pt-8 pb-12 hidden '>
                    <p className='relative text-[#5135FF] before:content-[""] before:border-2 before:border-[#5135FF] before:w-[15%] before:absolute before:top-[50%] before:left-0 font-bold tracking-widest pl-16'>Product design</p>
                </div>
                <div className='md:order-2 '>
                    <div>
                        <img src="./assets/images/image_team.webp" alt='team' />
                    </div>


                    <div className='mt-8'>
                        <p className='text-base font-medium'>
                            Our exceptional designers make it their business to create logical, clean, and effective UX/UI for both web and mobile. Bringing together world-class technical skills and a plethora of creativity, they work with development teams to produce engaging and impactful digital experiences for the end user.                    </p>
                    </div>

                    <div className='mt-8'>
                        <p>Get closer to our Design Team and see what they have prepared for you in the </p>

                        <a className='text-[#5135FF] py-4' href='https://www.staging.dopamine.cinnamon.services/' target='blank'>
                            <p>Design Dopamine Newsletter.</p>
                        </a>
                    </div>

                    <div className='mt-10'>
                        <button className='transition-shadow duration-400 ease-in-out delay-0 hover:shadow-inset-white outline-none px-8 pt-4 pb-3 bg-[#5135FF] text-white  text-base font-medium hover:bg-white hover:border-2 border-[#5135FF] hover:text-[#5135FF]'>See Open Positions</button>
                    </div>
                </div>
                <div className='mt-8 md:order-1 md:hidden' >{positionItems}</div>
            </div>


        </>
    )
}

export default Services