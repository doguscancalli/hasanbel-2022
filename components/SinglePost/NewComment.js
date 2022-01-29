import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'
import axios from 'axios'

// Component
import { StyledNewComment, StyledNewCommentTitle } from './style'
import { Input, TextArea, Form, Button } from '../index'

const NewComment = ({ comments, setComments }) => {
  const [loading, setLoading] = useState(false)

  const router = useRouter()
  const { query } = router

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const { name, text } = data

      const options = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/comment/${query?.slug}`,
        data: { name, text },
      }

      setLoading(true)

      const {
        data: { data: createdComment },
      } = await axios(options)

      setComments([createdComment, ...comments])
      setLoading(false)
      reset()
    } catch (err) {
      console.log(err)
      setLoading(false)
      reset()
    }
  }

  return (
    <StyledNewComment>
      <StyledNewCommentTitle>YORUM YAP</StyledNewCommentTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder='İsmin'
          name='name'
          {...register('name', {
            required: true,
          })}
          error={errors?.name}
          errorMessage={errors?.name?.type === 'required' && 'Bir isim girin'}
        />
        <TextArea
          placeholder='Yorumun'
          rows='8'
          {...register('text', {
            required: true,
          })}
          error={errors?.text}
          errorMessage={errors?.text?.type === 'required' && 'Bir yorum girin'}
        />
        <Button loading={loading}>GÖNDER</Button>
      </Form>
    </StyledNewComment>
  )
}

export default NewComment
