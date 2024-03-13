'use client'

import React from 'react'
import Image from 'next/image'

const Page:React.FC = () => {
  return (
    <section className='flex flex-col justify-center items-center mt-[40px] w-full h-full'>
      <div className=''>
        <Image
          src="/images/contact.jpeg"
          width={400}
          height={400}
          alt="image contact"
        />
      </div>
    </section>
  )
}

export default Page
