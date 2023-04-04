

import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarLink.css'

function NavbarLink({to,children}) {
  return (
    <NavLink className={`mr-8 text-white font-semibold transition-all duration-500 hover:text-green-400`} to={to}>{children}</NavLink>
  )
}

export default NavbarLink
