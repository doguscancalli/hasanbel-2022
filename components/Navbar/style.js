import styled from 'styled-components'
import theme from '../../theme'

export const StyledNavbar = styled.nav`
  padding: 1.875rem 0;

  & > :first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    padding: 1.25rem 0;
  }
`

export const StyledUserNavbar = styled.div``

export const StyledLogo = styled.a`
  color: ${theme.color.red};
  font-size: ${theme.font.size.lg};
  font-family: ${theme.font.family.heading};
  font-weight: 700;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.base};
  }
`

export const StyledNavbarItems = styled.ul`
  display: flex;
  li {
    margin-right: 1.25rem;

    &:last-child { 
      margin-right:0
    }

      text-transform: uppercase;
      font-family: ${theme.font.family.heading};
      font-weight: 700;

      @media (max-width: ${theme.breakpoint.mobileL}) {
        font-size: ${theme.font.size.xs};
        margin-right: .5rem;
      }
    }
  }
`
export const StyledAdminNavbar = styled.div``
