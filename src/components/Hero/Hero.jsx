import React from 'react'
import { AiOutlineArrowDown } from 'react-icons/ai'

function Hero() {
    return (
        <>
            <div className='px-5 '>
                <div className='mb-6'>
                    <h1 className='text-[40px] font-extrabold text-hero_header'>Results focused <br /> design & <br /> development agency.</h1>
                </div>
                <div className='mb-8'>
                    <p className='text-hero_color text-lg'>
                        Extend your team with our high performing specialists or hire us to shape your product from scratch. Either way, we’ll get your product off the ground and build a momentum for your success.
                    </p>
                </div>

                <div className='mx-auto max-w-[50%] '>
                    <a href='https://www2.deloitte.com/ce/en/pages/about-deloitte/topics/technology-fast-50.html' target='blank'><img className="rounded-[50%] w-full" src='./assets/images/image.png' alt='' /></a>
                </div>

                <div className='relative text-hero_color flex items-start flex-col rotate-0]  ' >
                    <div className=' absolute left-[-3em] bottom-[4em] rotate-[90deg] flex items-center ' >
                        <button className='text-[16px] mr-[10px]'>see our work</button>
                        <AiOutlineArrowDown className='rotate-[-90deg] ml-[px]' />
                    </div>
                </div>
            </div>


            <div className='bg-hero_header px-6 pt-[96px]    '>
                <div className='bg-[#f1c40f] '>
                    <img src='./assets/images/image_1.png' alt='code' />
                </div>
                <div className='mt-8'>
                    <p className='text-sm text-[#666666] font-bold tracking-widest'>IOS DEVELOPMENT</p>
                </div>

                <div className='mt-4'>
                    <h3 className='text-4xl font-bold text-[#222222]'>Smart Build:  Maximize <br /> your field survey</h3>
                </div>

                <div className='mt-4'>
                    <p className='text-[#525252] text-base font-medium'>An application for construction management. Make manipulation over construction map and export report as a PDF document. </p>
                </div>

                <div className='mt-8 bg-[#5afab7]'>
                    <img src="./assets/images/image_2.png" alt='computer' />
                </div>

                <div className=' text-sm tracking-wide flex text-[#666666]  justify-between font-bold w-[90%] mt-8'>
                    <p>PRODUCT DESIGN</p>
                    <p>QUALITY ASSURANCE</p>
                </div>

                <div>
                    <h3 className='text-4xl font-bold text-[#222222] mt-4'>Corrily:  Optimize prices  <br />  to maximize revenue</h3>
                </div>
                <div>
                    <p className='text-[#525252] text-base font-medium mt-4'>Corrily tailors your prices and discounts to the needs of different user segments in order to increase your revenue. Cinnamon was tasked with creating a new visual identity for Corrily and incorporating a fresh, and An application for An application for An application for construction management. construction management. construction management. stunning website redesign.</p>
                </div>
                <div className='mt-8 bg-[#52247F]'>
                    <img src="./assets/images/Fiona_Thumbnail.png" alt="fiona" />
                </div>

                <div className=' text-sm tracking-wide flex text-[#666666]  justify-between font-bold w-[90%] mt-8'>
                    <p>PRODUCT DESIGN</p>
                    <p>WEB DEVELOPMENT</p>
                </div>

                <div>
                    <h3 className='text-4xl font-bold text-[#222222] mt-4'>Fiona:  Engage &  <br />  Decide</h3>
                </div>

                <div className='pb-24'>
                    <p className='text-[#525252] text-base font-medium mt-4'>Fiona is a fintech consumer-facing website that enables users to search for financial products, discover them, and receive personalized recommendations.</p>
                </div>
            </div>
        </>
    )
}

export default Hero