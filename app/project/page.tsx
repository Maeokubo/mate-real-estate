'use client'

import React from 'react'
import Image from 'next/image'

const Page:React.FC = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-[40px] w-full h-full'>
      <h1 className='text-8xl p-4'>Mate Real Estate</h1>
      <div className='p-2'>
        <Image
          src="/images/home.jpeg"
          width={500}
          height={300}
          alt="Home page"
        />
      </div>
    </section>
  )
}
export default Page
