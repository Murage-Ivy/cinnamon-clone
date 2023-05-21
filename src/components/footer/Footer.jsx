import React from 'react'
import Logo from '../Logo/Logo'

function Footer() {
    const navList = ['Home', 'About Us', 'Projects', 'Careers', 'Services', 'Blog']
    const locations = [{
        id: 1,
        name: 'Zagreb',
        address: 'Slavonska avenija 6, 10000, Zagreb, Croatia',
        tel: '+385 95 382 9188'
    },
    {
        id: 2,
        name: 'New York',
        address: '500 7th Ave, New York, ',
        tel: 'NY 10018, United States'
    },
    {
        id: 3,
        name: 'Belgrade',
        address: 'Požeška 58 11000, Belgrade, ',
        tel: 'Serbia'
    }
    ]

    const socialIcons = [{
        id: 1,
        link: 'https://www.linkedin.com/company/cinnamon-llc/',
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#FFFFFF" style={{ color: "#ffffff" }} height="21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Cinnamon's Linkedin</title><path d="M444.17 32H70.28C49.85 32 32 46.7 32 66.89v374.72C32 461.91 49.85 480 70.28 480h373.78c20.54 0 35.94-18.21 35.94-38.39V66.89C480.12 46.7 464.6 32 444.17 32zm-273.3 373.43h-64.18V205.88h64.18zM141 175.54h-.46c-20.54 0-33.84-15.29-33.84-34.43 0-19.49 13.65-34.42 34.65-34.42s33.85 14.82 34.31 34.42c-.01 19.14-13.31 34.43-34.66 34.43zm264.43 229.89h-64.18V296.32c0-26.14-9.34-44-32.56-44-17.74 0-28.24 12-32.91 23.69-1.75 4.2-2.22 9.92-2.22 15.76v113.66h-64.18V205.88h64.18v27.77c9.34-13.3 23.93-32.44 57.88-32.44 42.13 0 74 27.77 74 87.64z"></path></svg>
    },
    {
        id: 2,
        link: 'https://dribbble.com/cinnamon_agency',
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#FFFFFF" style={{ color: "#ffffff" }} height="21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Cinnamon's Dribbble</title><path d="M256 32C132.33 32 32 132.33 32 256s100.33 224 224 224 224-100.22 224-224S379.67 32 256 32zm142.22 103.25a186.36 186.36 0 0144 108.38c-40.37-2.1-88.67-2.1-127.4 1.52-4.9-12.37-9.92-24.5-15.4-36.17 44.66-19.36 79.08-44.8 98.8-73.73zM256 69.33a185.81 185.81 0 01119.12 42.94c-20.3 25.66-52.15 48-91.82 64.86C261.6 137 236.63 102.47 210 75.28a187.51 187.51 0 0146-5.95zm-84.47 20.42c26.95 26.83 52.27 61 74.44 101C203.85 203.62 155.55 211 104 211c-9.8 0-19.36-.35-28.81-.94a186.78 186.78 0 0196.34-120.31zM69.68 247.13c10.62.47 21.35.7 32.2.59 58.8-.7 113.52-9.92 160.54-25q6.65 13.83 12.6 28.35a115.43 115.43 0 00-16.69 5c-64.28 27-114.91 70.51-142.33 123.13A186 186 0 0169.33 256c0-3 .12-5.95.35-8.87zM256 442.67a185.57 185.57 0 01-114.45-39.32c24.85-49.23 69.18-90 125.07-115.27 5.25-2.45 12.25-4.43 20.3-6.18q10 27.64 17.85 57.4A678 678 0 01322 430.42a185.06 185.06 0 01-66 12.25zm100.92-29.75a672.61 672.61 0 00-17.39-92.05c-4-15.17-8.51-29.87-13.41-44.22 36.63-3 80.5-2.57 115.38 0a186.5 186.5 0 01-84.58 136.27z"></path></svg>
    },
    {
        id: 3,
        link: 'https://www.behance.net/cinnamon_design',
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#FFFFFF" style={{ color: "#ffffff" }} height="21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Cinnamon's Behance</title><path d="M344.1 233.6c-28.9 0-32.9 28.8-32.9 28.8h61.4s.4-28.8-28.5-28.8zm-139.3 28.8h-54.4v50h51.7c7.8-.2 22.4-2.4 22.4-24.3 0-26-19.7-25.7-19.7-25.7z"></path><path d="M256 32C132.3 32 32 132.3 32 256s100.3 224 224 224 224-100.3 224-224S379.7 32 256 32zm47.2 137.6h77.1v23h-77.1v-23zm-39 120.8c0 57-59.4 55.2-59.4 55.2h-97.2v-187h97.2c29.6 0 52.9 16.3 52.9 49.8S229.2 244 229.2 244c37.6 0 35 46.4 35 46.4zm144.2-3.1h-96.9c0 34.7 32.9 32.5 32.9 32.5 31.1 0 30-20.1 30-20.1h32.9c0 53.4-64 49.7-64 49.7-76.7 0-71.8-71.5-71.8-71.5s-.1-71.8 71.8-71.8c75.7.1 65.1 81.2 65.1 81.2z"></path><path d="M218 211.3c0-19.4-13.2-19.4-13.2-19.4h-54.4v41.7h51c8.8 0 16.6-2.9 16.6-22.3z"></path></svg>
    },
    {
        id: 4,
        link: 'https://www.instagram.com/cinnamon.agency/',
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#FFFFFF" style={{ color: "#ffffff" }} height="21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Cinnamon's Instagram</title><path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path><path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path></svg>
    },
    {
        id: 5,
        link: 'https://www.facebook.com/cinnamonHQ/',
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#FFFFFF" style={{ color: "#ffffff" }} height="21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Cinnamon's Facebook</title><path d="M512 256c0 141.4-114.6 256-256 256S0 397.4 0 256C0 125.1 114.6 10 256 0s256 114.6 256 256zm-118.4-1.6h-64.2v-64.2c0-17.8 14.4-32.2 32.2-32.2h32.2V96h-64.2c-53 0-96.2 43.2-96.2 96.2v64.2h-64.2v64.2h64.2v160h64.2V318.2h64.2z"></path></svg>
    },
    {
        id: 3,
        link: 'https://www.cinnamon.agency/rss',
        icon: <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 512 512" color="#FFFFFF" style={{ color: "#ffffff" }} height="21" width="21" xmlns="http://www.w3.org/2000/svg"><title>Cinnamon's RSS</title><path d="M108.56 342.78a60.34 60.34 0 1060.56 60.44 60.63 60.63 0 00-60.56-60.44z"></path><path d="M48 186.67v86.55c52 0 101.94 15.39 138.67 52.11s52 86.56 52 138.67h86.66c0-151.56-125.66-277.33-277.33-277.33z"></path><path d="M48 48v86.56c185.25 0 329.22 144.08 329.22 329.44H464C464 234.66 277.67 48 48 48z"></path></svg>
    },
    ]

    const socialList = socialIcons.map((social, index) => <a key={index} className="px-3" href={social.link} target='blank'>{social.icon}</a>)
    const locationsList = locations.map(location => <div key={location.id} className='py-4 '>
        <p className='font-bold text-lg '>{location.name}</p>
        <p className='text-sm font-light md:pr-16'>{location.address}</p>
        <p className='text-sm font-light md:pr-6'>{location.tel}</p>
    </div>
    )

    const navItems = navList.map((item, index) => <a className='py-2' key={index} href='!#'>{item}</a>)
    return (
        <div className=' bg-hero-pattern bg-secondary px-5 text-white pt-16 pb-4  md:px-20 '>
            <div className='md:grid grid-cols-[40%_1fr] md:items-center'>
                <Logo />
                <div className='py-6 mt-3 '>
                    <h4 className='font-bold text-4xl'>All software, zero bullshit. </h4>
                </div>
                <div className='grid grid-cols-2 grid-rows-3 md:flex md:flex-col  '>
                    {navItems}
                </div>

                <div className='grid grid-cols-2 grid-rows-2 py-6 gap-3 md:flex md:justify-between' >
                    {locationsList}
                </div>
            </div>
            <div className='md:flex md:justify-between md:items-end  '>
                <div className='py-6 md:order-2 md:py-0 '>
                    <h5 className='text-white font-bold tracking-wide'>Our newsletter</h5>
                    <input type='email' placeholder='Your E-mail' className='border-b-2 outline-none w-full py-3 bg-transparent placeholder:text-white' />
                    <button className=' text-white px-4 py-3  w-full bg-[#5135FF] tracking-wide font-semibold mt-4'>Subscribe</button>
                </div>

                <div className=' mx-auto md:mx-0 py-6 md:py-0 md:order-3'>
                    <div className='w-[200px] mx-auto py-6'> <img src='./assets/images/pangea-badge.7734fbc8.svg' alt='pangea-badge' className='mb-4 block mx-auto w-full' /></div>
                    <div className='w-[216px] mx-auto pb-6'><img src='./assets/images/bottom_footer.webp' alt='bottom' className='mt-4 block mx-auto  max-w-full' /></div>

                </div>

                <div className='text-center md:order-1  '>
                    <a href="mailto:hello@cinnamon.agency" className='underline'>hello@cinnamon.agency</a>
                </div>
            </div>

            <div className=' md:flex md:justify-between md:items-center md:border-t-2 md:mt-6 '>
                <div className='flex justify-between items-center py-6 border-y-2 mt-6  md:hidden md:border-none md:w-auto  '>
                    {socialList}
                </div>

                <div className='flex justify-evenly py-6 md:w-auto '>
                    <p className='mr-4'>© 2023 Cinnamon</p>
                    <p className='underline'>Privacy policy</p>
                </div>

                <div className=' hidden  justify-between items-center py-6 border-y-2  md:flex  md:border-none md:w-auto  '>
                    {socialList}
                </div>
            </div>

        </div>
    )
}

export default Footer