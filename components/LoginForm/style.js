import styled from 'styled-components'
import theme from '../../theme'

export const StyledLoginForm = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 400px;
`

export const StyledLoginFormTitle = styled.h1`
  font-family: ${theme.font.family.heading};
  font-weight: 900;
  font-size: ${theme.font.size.lg};
  margin-bottom: 1.875rem;
`
