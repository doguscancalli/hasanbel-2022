import React from 'react'
import Link from 'next/link'

// Data
import { adminLinks } from '../../data/links'

// Component
import { StyledAdminNavbar, StyledLogo, StyledNavbarItems } from './style'

const AdminNavbar = () => {
  return (
    <StyledAdminNavbar>
      <StyledLogo>YÖNETİCİ PANELİ</StyledLogo>
      <StyledNavbarItems>
        {adminLinks.map((item) => (
          <li key={item.name}>
            <Link href={item.url}>{item.name}</Link>
          </li>
        ))}
      </StyledNavbarItems>
    </StyledAdminNavbar>
  )
}

export default AdminNavbar
