import React from 'react'
import Image from 'next/image'
import rgbDataURL from '../../utils/pixelGif'

// Component
import { StyledPostImage, StyledPostImageSource } from './style'

const PostImage = ({ data }) => {
  const { image, imageSource } = data

  return (
    <StyledPostImage>
      <Image
        src={image}
        alt=''
        placeholder='blur'
        blurDataURL={rgbDataURL(0, 0, 0)}
        layout='fill'
        objectFit='cover'
      />
      {imageSource && (
        <StyledPostImageSource
          href={imageSource}
          target='_blank'
          rel='noopener'
        >
          KAYNAK
        </StyledPostImageSource>
      )}
    </StyledPostImage>
  )
}

export default PostImage
