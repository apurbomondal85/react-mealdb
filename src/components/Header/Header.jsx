
import React, { useState } from 'react'
import NavbarLink from '../NavbarLink/NavbarLink'
import { Outlet } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/solid'

function Header() {
    const [open, setOpen] = useState(false)
    const handleBar = () => {
        setOpen(!open)
    }
  return (
    <>
        <div className='w-full bg-purple-900 sticky top-0'>
            <nav className='md:w-[90%] lg:w-[80%] mx-auto px-6 md:px-0 py-6 flex justify-between items-center relative'>
                <h1 className='text-white text-3xl font-bold'>MyRestaurant</h1>
                <div className={`w-full h-[300px] absolute transition-all duration-500 top-[0%] ${open ? 'left-0' : '-left-[100%]'} bg-purple-900 flex flex-col items-center justify-center gap-4 md:bg-transparent md:static md:h-auto md:w-auto md:block`}>
                    <NavbarLink to={`/`}>Home</NavbarLink>
                    <NavbarLink to={`/about`}>About</NavbarLink>
                    <NavbarLink to={`/food`}>Foods</NavbarLink>
                    <NavbarLink to={`/contact`}>Contact</NavbarLink>
                </div>
                <span onClick={handleBar} className='md:hidden z-10'>
                    <Bars3Icon className='text-white h-6 w-6 cursor-pointer' />
                </span>
            </nav>
        </div>
        <Outlet />
    </>
  )
}

export default Header
