import React from 'react'

// Components
import {
  StyledStatistic,
  StyledStatisticData,
  StyledStatisticTitle,
} from './style'
const Statistic = ({ title, data }) => {
  return (
    <StyledStatistic>
      <StyledStatisticTitle>{title}</StyledStatisticTitle>
      <StyledStatisticData>{data}</StyledStatisticData>
    </StyledStatistic>
  )
}

export default Statistic
