import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'

function TechTopics() {
    const techTopics = [{
        id: 1,
        initials: 'QA',
        location: 'Juraj Baškarad',
        date: '2023-05-17',
        time: '6 min',
        title: 'Embracing the Digital Renaissance Part 1',
        image: './assets/images/topic_1.webp'
    },
    {

        id: 2,
        initials: 'PM',
        location: 'Anamarija Macanga',
        date: '2023-05-14',
        time: '7min',
        title: 'Cracking the Code: Fixed-Price Project Success',
        image: './assets/images/topic_2.webp'
    },
    {

        id: 3,
        initials: 'QA',
        location: 'Evelyn Guzmán',
        date: '2023-04-27',
        time: '4min',
        title: 'Meet the Makers: Marija Marušić',
        image: './assets/images/topic_3.webp'
    }
    ]


    const topics = techTopics.map(topic => <div key={topic.id} className='  '>
        <div className='min-w-[400px] md:w-[600px]'>
            <img className='w-[full] block ' src={topic.image} alt={topic.title} />
        </div>
        <div>
            <h5 className='font-bold py-3 text-sm'>{topic.initials}</h5>
            <div className='flex justify-between text-sm w-4/5 tracking-wider'>
                <p>{topic.location}</p>
                <p className='text-[10px]'>⭐</p>
                <p>{topic.date}</p>

                <p className='text-[10px]'>⭐</p>
                <p>{topic.time}</p>
            </div>
            <div className='py-2'>
                <h3 className='font-bold tracking-wide'>{topic.title}</h3>
            </div>
        </div>
    </div>)
    return (
        <>
            <div className='relative bg-white px-5 '>
                <div className='pt-6 lg:px-24'>
                    <h2 className='  mb-6 text-4xl font-bold pb-8  md:text-6xl'>
                        Stay in the loop <br />
                        on tech topics
                    </h2>
                </div>

                <div className=' flex gap-8 justify-between overflow-x-auto no-scrollbar lg:px-24 '>
                    {topics}
                </div>

                <div className=' flex text-[#5135FF] w-[55%]  justify-between items-center mt-12 md:w-fit lg:px-24'>
                    <MdArrowForwardIos />
                    <p className='border-b-2 border-b-[#5135FF]  font-bold'>VIEW MORE BLOGS</p>
                </div>

                <div className="relative text-center mt-12 md:flex md:justify-between  md:py-48">
                    <div className='relative md:flex md:flex-col  md:items-center md:justify-center md:w-4/5 mx-auto ' >
                        <h2 className=' text-3xl md:text-5xl font-bold pb-8 tracking-wider md:text-center md:w-full'>Have a project in mind?</h2>
                        <h2 className='text-3xl md:text-5xl font-bold pb-8 tracking-wider '>
                            Let's work together.
                        </h2>
                        <button className=' hover:bg-white hover:text-[#5135FF] hover:border-2 hover:border-[#5135FF] bg-[#5135FF] text-white pt-4 px-8 pb-3 text-center md:w-fit transition-all'>Contact us</button>
                    </div>

                    <div className='relative w-1/2 left-[-10px] md:absolute md:left-[-12px] md:bottom-0 pt-4 mt-4'>
                        <img className='w-[80%] md:w-[60%]' src='./assets/images/corner.webp' alt='corner' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default TechTopics