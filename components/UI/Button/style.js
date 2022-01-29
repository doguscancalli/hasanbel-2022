import styled from 'styled-components'
import Link from 'next/link'
import theme from '../../../theme'

export const A = styled.a`
  display: flex;
  align-items: center;
  flex: none;
`

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  flex: none;
`

export const StyledButton = styled.button`
  font-family: ${theme.font.family.heading};
  font-weight: 900;
  text-transform: uppercase;
  padding: 1.5rem 3.75rem 1.125rem 3.75rem;
`
