import React from 'react'

// Component
import { StyledNavbar } from './style'
import UserNavbar from './UserNavbar'
import AdminNavbar from './AdminNavbar'

const Navbar = ({ isAdmin }) => {
  return (
    <StyledNavbar>{isAdmin ? <AdminNavbar /> : <UserNavbar />}</StyledNavbar>
  )
}

export default Navbar
