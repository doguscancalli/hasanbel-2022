import styled from 'styled-components'
import theme from '../../theme'
import hexa from '../../utils/hexa'

export const StyledStatistics = styled.ul`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;
`

export const StyledStatistic = styled.li`
  background: ${hexa(theme.color.white, 0.05)};
  padding: 1.875rem;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    padding: 0.75rem;
    flex: 1;
  }
`

export const StyledStatisticTitle = styled.h4`
  font-size: ${theme.font.size.base};
  opacity: 0.2;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.sm};
  }
`

export const StyledStatisticData = styled.h2`
  font-size: ${theme.font.size.xl};
  margin-top: 1.25rem;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.lg};
  }
`
