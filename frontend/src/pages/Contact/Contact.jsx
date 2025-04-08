import NavBarSizeAccountFor from '@/components/NavBarSizeAccountFor'
import React from 'react'

export default function Contact() {
  return (
    <>
    <NavBarSizeAccountFor/>
    <div className='mx-auto mt-4 mb-[12px] grid justify-items-center'>
      <h1 className='uppercase text-[57px] text-brandBlue-800 leading-[1]'>
        Contact
      </h1>
      {/* {caption && 
      <p className='text-[1.25rem] text-brandTeal-800'>{caption}</p>} */}
    </div>
    </>
  )
}
