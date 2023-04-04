
import React from 'react'
import NavbarLink from '../NavbarLink/NavbarLink'
import { Outlet } from 'react-router-dom'

function Header() {
  return (
    <>
        <div className='w-ful bg-purple-900'>
            <nav className='w-[80%] mx-auto py-6 flex justify-between items-center'>
                <h1 className='text-white text-3xl font-bold'>MyRestaurant</h1>
                <div>
                    <NavbarLink to={`/`}>Home</NavbarLink>
                    <NavbarLink to={`/about`}>About</NavbarLink>
                    <NavbarLink to={`/food`}>Foods</NavbarLink>
                    <NavbarLink to={`/contact`}>Contact</NavbarLink>
                </div>
            </nav>
        </div>
        <Outlet />
    </>
  )
}

export default Header
