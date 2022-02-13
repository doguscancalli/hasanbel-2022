import styled from 'styled-components'
import theme from '../../theme'

export const StyledFooter = styled.footer`
  text-align: center;
  font-size: ${theme.font.size.xs};
  padding: 3.75rem 0 1.25rem 0;

  a {
    color: ${theme.color.red};
  }
`
