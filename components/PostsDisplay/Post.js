import React from 'react'
import Image from 'next/image'
import rgbDataURL from '../../utils/pixelGif'
import { useRouter } from 'next/router'
import { useMedia } from 'react-media'
import theme from '../../theme'

// Asset
import Plastic from '../../assets/img/plastic.jpg'
import Cloth from '../../assets/img/cloth.jpg'
import Grunge from '../../assets/img/grunge.jpg'
import Scraces from '../../assets/img/scraces.jpg'
import Cracks from '../../assets/img/cracks.jpg'

// Component
import { StyledPost, StyledPostTitle } from './style'

const Post = ({ post, ...rest }) => {
  const { title, image, slug } = post

  const router = useRouter()

  const isSmallScreen = useMedia({
    query: `(max-width: ${theme.breakpoint.mobileL})`,
  })

  const handleTextSlice = (text) => {
    const characterLength = isSmallScreen ? 12 : 20

    if (text.length <= characterLength) return text

    return `${text.slice(0, characterLength)}...`
  }

  return (
    <StyledPost
      data-type='post'
      onClick={() => router.push(`/${slug}`)}
      {...rest}
    >
      <div className='post-texture'>
        <Image
          src={Plastic}
          alt=''
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={rgbDataURL(255, 83, 48)}
        />
      </div>
      <div className='image-wrapper'>
        <div className='texture cloth'>
          <Image
            src={Cloth}
            alt=''
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={rgbDataURL(255, 83, 48)}
          />
        </div>
        <div className='texture grunge'>
          <Image
            src={Grunge}
            alt=''
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={rgbDataURL(255, 83, 48)}
          />
        </div>
        <div className='texture scraces'>
          <Image
            src={Scraces}
            alt=''
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={rgbDataURL(255, 83, 48)}
          />
        </div>
        <div className='texture cracks'>
          <Image
            src={Cracks}
            alt=''
            layout='fill'
            objectFit='cover'
            placeholder='blur'
            blurDataURL={rgbDataURL(255, 83, 48)}
          />
        </div>
        <Image
          src={image}
          alt=''
          layout='fill'
          objectFit='cover'
          placeholder='blur'
          blurDataURL={rgbDataURL(0, 0, 0)}
        />
      </div>
      <StyledPostTitle>{handleTextSlice(title)}</StyledPostTitle>
    </StyledPost>
  )
}

export default Post
