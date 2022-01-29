import React, { useEffect, useState } from 'react'
import Image from 'next/image'

// Asset
import BackgroundImage from '../../assets/img/background.jpg'

// Component
import { StyledBackground } from './style'

const Background = () => {
  const [height, setHeight] = useState(0)

  useEffect(() => {
    function handleResize() {
      setHeight(window.scrollHeight)
    }

    window.addEventListener('resize', handleResize)

    handleResize()
    console.log(height)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [height])

  return (
    <StyledBackground>
      <Image src={BackgroundImage} alt='' />
    </StyledBackground>
  )
}

export default Background
