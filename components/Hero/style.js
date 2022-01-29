import styled from 'styled-components'
import theme from '../../theme'

export const StyledHero = styled.div`
  height: 70vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`
export const StyledHeroContent = styled.div`
  position: relative;

  .scrawl {
    position: absolute;
    top: -6.25vw;
    left: 10.417vw;
    width: 20.833vw;
  }

  .asterisk {
    width: 1.875vw;
    height: 1.875vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(-1.875vw / 2);
    right: calc(-1.875vw / 2);
    animation: spin 2s linear infinite;
    transform-origin: center center;
  }

  @keyframes spin {
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    .scrawl {
      top: 20px;
      left: 0;
      width: 30.588vw;
    }
  }
`

export const StyledHeading = styled.h1`
  position: relative;
  font-size: 5.520833333333333vw;
  font-weight: 900;
  line-height: 1.2;

  span {
    -webkit-text-stroke-width: 3px;
    -webkit-text-stroke-color: ${theme.color.red};
    color: transparent;
    font-style: italic;
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: 8.533vw;

    span {
      -webkit-text-stroke-width: 1.5px;
    }
  }
`
