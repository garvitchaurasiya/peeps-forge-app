"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { RiMenuUnfoldFill } from 'react-icons/ri'

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

export function Navbar() {

  const [showNavbarOptions, setShowNavbarOptions] = useState(false)

  return (
    <div className='fixed z-20 w-screen top-0 px-6 lg:px-20 peeps-secondary-bg'>
      <div className='peeps-tertiary h-20 font-semibold flex justify-between items-center border-b'>

        <div className='md:hidden'>

          <div className='border-2 p-2 rounded cursor-pointer animation-drop' onClick={() => { setShowNavbarOptions(!showNavbarOptions) }}>
            <RiMenuUnfoldFill />
          </div>

        </div>

        <div className='flex w-1/2 justify-between hidden md:flex'>

          <div>
            <Link href={'./'}>
              <Image src='/image_resources/peeps_forge_logo.svg' alt='image' width={40} height={40} />
            </Link>
          </div>

          <div className='flex items-center'>
            <Link href={'./Business'}>Our Bussiness</Link>
          </div>

          <div className='flex items-center'>/</div>

          <div className='flex items-center'>
            <Link href={'./About'}>About</Link>
          </div>

          <div className='flex items-center'>/</div>

          <div className='flex items-center'>
            <Link href={'./Contact'}>Contact</Link>
          </div>

        </div>
        <div className='peeps-moss'><a href='mailto:team@peepsforge.com'>team@peepsforge.com</a></div>
      </div>

      <div className={`lg:hidden peeps-secondary-bg ${(showNavbarOptions) ? 'block' : 'hidden'}`}>
        <div className='flex items-center p-4 border-b'>
          <Link href={'./'}>Home</Link>
        </div>

        <div className='flex items-center p-4 border-b'>
          <Link href={'./Business'}>Our Bussiness</Link>
        </div>

        <div className='flex items-center p-4 border-b'>
          <Link href={'./About'}>About</Link>
        </div>

        <div className='flex items-center p-4 border-b'>
          <Link href={'./Contact'}>Contact</Link>
        </div>
      </div>
    </div >
  )
}
