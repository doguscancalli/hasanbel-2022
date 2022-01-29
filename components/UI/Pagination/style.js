import styled from 'styled-components'
import theme from '../../../theme'

export const StyledPagination = styled.div`
  display: flex;
  justify-content: center;
`

export const StyledPaginationItem = styled.button`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.xl};
  font-weight: 700;
  background: ${(props) =>
    props.currentPage ? theme.color.red : theme.color.white};
  color: ${(props) =>
    props.currentPage ? theme.color.white : theme.color.black};
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 30px;
    height: 30px;
    margin-bottom: -0.5rem;
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: ${theme.font.size.base};
    width: 30px;
    height: 30px;

    span {
      width: 20px;
      height: 20px;
    }
  }
`
