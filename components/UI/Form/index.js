import React from 'react'

// Component
import { StyledForm } from './style'

const index = ({ children, ...rest }) => {
  return <StyledForm {...rest}>{children}</StyledForm>
}

export default index
