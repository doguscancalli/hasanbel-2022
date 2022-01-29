import React, { forwardRef } from 'react'

// Components
import {
  StyledInputWrapper,
  StyledInput,
  StyledTextArea,
  StyledTitleInput,
  StyledSecondaryInput,
  StyledError,
} from './style'

const handleWrapping = (Component, props) => {
  const { forwardedRef, error, errorMessage, ...rest } = props
  return (
    <StyledInputWrapper error={error}>
      <Component {...rest} ref={forwardedRef} />
      {error && <StyledError>{errorMessage}</StyledError>}
    </StyledInputWrapper>
  )
}

/* eslint-disable */
export const Input = forwardRef((props, ref) =>
  handleWrapping(StyledInput, { forwardedRef: ref, ...props })
)

export const TextArea = forwardRef((props, ref) =>
  handleWrapping(StyledTextArea, { forwardedRef: ref, ...props })
)

export const TitleInput = forwardRef((props, ref) =>
  handleWrapping(StyledTitleInput, { forwardedRef: ref, ...props })
)

export const SecondaryInput = forwardRef((props, ref) =>
  handleWrapping(StyledSecondaryInput, { forwardedRef: ref, ...props })
)
