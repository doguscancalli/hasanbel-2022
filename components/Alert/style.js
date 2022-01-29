import styled from 'styled-components'
import theme from '../../theme'

export const StyledAlert = styled.div`
  width: 100%;
  background: ${theme.color.red};
  color: ${theme.color.white};
  margin: 1.25rem 0;
  padding: 1.25rem;
  font-size: ${theme.font.size.sm};

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.xs};
  }
`
