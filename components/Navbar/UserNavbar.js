import React from 'react'
import Link from 'next/link'

// Data
import { social } from '../../data/links'

// Component
import { StyledUserNavbar, StyledLogo, StyledNavbarItems } from './style'

const UserNavbar = () => {
  return (
    <StyledUserNavbar>
      <Link href='/' passHref>
        <StyledLogo>HASAN BEL</StyledLogo>
      </Link>
      <StyledNavbarItems>
        {social.map((item) => (
          <li key={item.name}>
            <a href={item.url} target='_blank' rel='noreferrer'>
              {item.name}
            </a>
          </li>
        ))}
      </StyledNavbarItems>
    </StyledUserNavbar>
  )
}

export default UserNavbar
