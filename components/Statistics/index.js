import React from 'react'

// Components
import { StyledStatistics } from './style'
import Statistic from './Statistic'

const Statistics = () => {
  return (
    <StyledStatistics>
      <Statistic title='GÜNLÜK ZİYARETÇİLER' data='23 KİŞİ' />
      <Statistic title='aylık ZİYARETÇİLER' data='571 KİŞİ' />
      <Statistic title='YILLIK ZİYARETÇİLER' data='7022 KİŞİ' />
      <Statistic title='TOPLAM OKUMA' data='14890 KEZ' />
    </StyledStatistics>
  )
}

export default Statistics
