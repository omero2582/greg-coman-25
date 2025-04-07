import React from 'react'
import { Link } from 'react-router'
import SvgLogo from  '../assets/react.svg?react'

export default function Navbar() {
  return (
    <nav className='grid grid-flow-col grid-cols-[auto_1fr] gap-x-2 bg-slate-900 text-neutral-100'>
        <Link to='/' >
          <SvgLogo className='w-[40px] h-auto py-[4px] cursor-pointer'/>
        </Link>
        <ul className=" text-[24px] grid grid-flow-col justify-center">
          {[
            ['Home', '/'],
            ['About', '/about'],
            ['Services', '/services'],
            ['Pricing', '/pricing'],
            ['Testimonials', '/testimonials'],
          ].map(([title, url]) => (
            <li key={title} className="flex">
              <Link 
                className='text-[18px] px-[10px] h-full grid items-center hover:bg-slate-800 !text-gray-200 tracking-wide'
                to={url}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
    </nav>
  )
}
