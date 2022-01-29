import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import axios from 'axios'
import { useRouter } from 'next/router'

// Component
import { StyledNewPostForm } from './style'
import { TitleInput, SecondaryInput, Button } from '../index'
const TextEditor = dynamic(() => import('../TextEditor'), {
  ssr: false,
})
import { ImageUpload } from '../index'

const NewPostForm = () => {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [image, setImage] = useState('')
  const [imageSource, setImageSource] = useState('')

  const [loading, setLoading] = useState(false)
  const [imageUploading, setImageUploading] = useState(false)
  const [titleError, setTitleError] = useState(false)
  const [textError, setTextError] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageTypeError, setImageTypeError] = useState(false)

  const router = useRouter()

  const uploadImage = async (e) => {
    try {
      const selectedFile = e.target.files[0]

      if (
        selectedFile.type === 'image/jpg' ||
        selectedFile.type === 'image/jpeg' ||
        selectedFile.type === 'image/png'
      ) {
        setImageTypeError(false)
        setImageUploading(true)
        setImageError(false)

        const formData = new FormData()

        formData.append('file', selectedFile)
        formData.append(
          'upload_preset',
          process.env.NEXT_PUBLIC_CLOUD_UPLOAD_PRESET
        )

        const options = {
          method: 'post',
          url: `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          data: formData,
        }

        const res = await axios(options)

        setImage(res?.data?.secure_url)
        console.log(res?.data?.secure_url)

        setImageUploading(false)
      } else {
        setLoading(false)
        setImageTypeError(true)
      }
    } catch (err) {
      setImageUploading(false)
      console.log(err)
    }
  }

  const handleSubmit = async () => {
    try {
      title ? setTitleError(false) : setTitleError(true)
      text && text !== '<p><br></p>' ? setTextError(false) : setTextError(true)
      image ? setImageError(false) : setImageError(true)

      if (titleError || textError || imageError) return

      const options = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/post/private/create`,
        data: { title, text, image, imageSource },
        withCredentials: true,
      }

      setLoading(true)

      const res = await axios(options)

      setTitle('')
      setText('')
      setImage('')
      setImageSource('')
      setLoading(false)

      router.push(`/${res?.data?.data?.slug}`)
    } catch (err) {
      setLoading(false)
      console.log(err)
    }
  }

  return (
    <StyledNewPostForm>
      <TitleInput
        placeholder='BAŞLIK'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        error={titleError}
        errorMessage='Bir başlık girin'
      />
      <TextEditor
        setText={setText}
        error={textError}
        errorMessage='Bir yazı girin'
      />
      <ImageUpload
        image={image}
        uploadImage={uploadImage}
        loading={imageUploading}
        error={imageError || imageTypeError}
        errorMessage={imageTypeError && 'Resim seçtiğizden emin olun'}
      />
      <SecondaryInput
        placeholder='Resim Kaynağı'
        value={imageSource}
        onChange={(e) => setImageSource(e.target.value)}
      />
      <Button
        onClick={handleSubmit}
        loading={loading}
        disabled={imageUploading}
      >
        PAYLAŞ
      </Button>
    </StyledNewPostForm>
  )
}

export default NewPostForm
