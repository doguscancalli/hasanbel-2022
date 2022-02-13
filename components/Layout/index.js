import React, { useEffect, useState } from 'react'
import GlobalStyle from '../../theme/globalStyle'
import { useRouter } from 'next/router'

// Component
import { Wrapper, Navbar, Footer } from '../index'

const Layout = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(undefined)

  const router = useRouter()

  let currentRoute = router.pathname

  useEffect(() => {
    setIsAdmin(currentRoute.includes('admin'))
  }, [currentRoute])

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Navbar isAdmin={isAdmin} />
        {children}
        <Footer />
      </Wrapper>
    </>
  )
}

export default Layout
