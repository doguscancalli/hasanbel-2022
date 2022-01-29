import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { useCookies } from 'react-cookie'

// Component
import { StyledLoginForm, StyledLoginFormTitle } from './style'
import { Form, Input, Button, Alert } from '../index'

const LoginForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()
  const [cookie, setCookie] = useCookies(['token'])

  const onSubmit = async (data) => {
    try {
      const { email, password } = data

      const options = {
        method: 'post',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/auth/login`,
        data: { email, password },
      }

      setLoading(true)
      setError(false)

      const res = await axios(options)

      setCookie('token', res?.data?.token, {
        path: '/',
        maxAge: 3600 * 24 * 30,
        sameSite: true,
      })

      setLoading(false)
      reset()
      router.push('/admin')
    } catch (err) {
      setLoading(false)
      reset()
      setError(true)
      setErrorMessage(err?.response?.data?.message)
    }
  }

  return (
    <StyledLoginForm>
      <StyledLoginFormTitle>YÖNETİCİ GİRİŞİ</StyledLoginFormTitle>
      {error && <Alert message={errorMessage} />}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder='Eposta'
          name='email'
          {...register('email', {
            required: true,
            pattern: /^\S+@\S+$/i,
          })}
          error={errors?.email}
          errorMessage={
            (errors?.email?.type === 'required' && 'Bir eposta girin') ||
            (errors?.email?.type === 'pattern' && 'Geçerli bir eposta girin')
          }
        />
        <Input
          placeholder='Şifre'
          type='password'
          name='password'
          {...register('password', {
            required: true,
          })}
          error={errors?.password}
          errorMessage={
            errors?.password?.type === 'required' && 'Bir şifre girin'
          }
        />
        <Button loading={loading}>GİRİŞ YAP</Button>
      </Form>
    </StyledLoginForm>
  )
}

export default LoginForm
