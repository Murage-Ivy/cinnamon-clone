import React from 'react'
import { CiLocationOn } from 'react-icons/ci'

function Offices() {
  const officeList = [
    {
      id: 1,
      name: 'Zagreb',
      address: 'Slavonska avenija 6, 10000, Zagreb, Croatia',
      image: './assets/images/office_1.webp'
    },
    {
      id: 2,
      name: 'New York',
      address: '500 7th Ave, New York, NY 10018, United States',
      image: './assets/images/office_2.webp'
    },
    {
      id: 3,
      name: 'Belgrade',
      address: 'Požeška 58 11000, Belgrade, Serbia',
      image: './assets/images/office_3.webp'
    }
  ]

  const offices = officeList.map(office => <div key={office.id} className='  '>
    <div className='min-w-[300px]'>
      <img className='w-[full] block ' src={office.image} alt={office.name} />
    </div>
    <div className='grid grid-cols-[10%_1fr]  mt-6 hover:cursor-pointer hover:text-[#5135FF] '>
      <CiLocationOn />
      <div className=''>
        <h3 className='font-bold text-lg '>{office.name}</h3>
        <p className='text-sm ' >{office.address}</p>
      </div>
    </div>
  </div>)
  return (
    <div className='relative   mt-12 bg-white px-5 py-8 '>
      <h3 className='text-2xl font-bold'>Our Offices</h3>
      <div className=' flex gap-8 justify-between overflow-x-scroll '>
        {offices}
      </div>
    </div>

  )
}

export default Offices