import React from 'react'
import Image from 'next/image'

// Asset
import Scrawl from '../../assets/img/scrawl.svg'
import AsteriskLg from '../../assets/img/asterisk-lg.svg'

// Component
import { StyledHeading, StyledHero, StyledHeroContent } from './style'

const Hero = () => {
  return (
    <StyledHero>
      <StyledHeroContent>
        <div className='scrawl'>
          <Image src={Scrawl} alt='Scrawl' />
        </div>
        <div className='asterisk'>
          <Image src={AsteriskLg} alt='Asterisk' />
        </div>
        <StyledHeading>
          Yazmanın karşı konulmaz arzusundakİ <span>düşünceler</span>
        </StyledHeading>
      </StyledHeroContent>
    </StyledHero>
  )
}

export default Hero
