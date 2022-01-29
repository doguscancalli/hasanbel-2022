import React, { useRef } from 'react'
import Image from 'next/image'
import PulseLoader from 'react-spinners/PulseLoader'

// Component
import {
  StyledImageUpload,
  StyledImageUploadTitle,
  StyledImageUploadInput,
  StyledImagePreview,
} from './style'

const ImageUpload = ({ image, uploadImage, loading, error, errorMessage }) => {
  const imageInput = useRef(null)

  const selectImage = () => {
    imageInput.current.click()
  }

  return (
    <StyledImageUpload>
      {!image && (
        <>
          <StyledImageUploadTitle onClick={selectImage} error={error}>
            {!loading ? (
              <>
                RESİM EKLE
                <span>{errorMessage}</span>
              </>
            ) : (
              <PulseLoader color='#ffffff' size={10} />
            )}
          </StyledImageUploadTitle>
          <StyledImageUploadInput
            type='file'
            name='image'
            ref={imageInput}
            onChange={uploadImage}
            accept='.jpg, .jpeg, .png'
          />
        </>
      )}
      {image && (
        <StyledImagePreview>
          <Image
            src={image}
            alt=''
            layout='fill'
            objectFit='cover'
            placeholder='blurred'
          />
        </StyledImagePreview>
      )}
    </StyledImageUpload>
  )
}

export default ImageUpload
