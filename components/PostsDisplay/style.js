import styled from 'styled-components'
import theme from '../../theme'

export const StyledPostsDisplay = styled.section`
  scroll-margin: 100px;
`

export const StyledPosts = styled.ul`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  gap: 30px;

  @media (min-width: ${theme.breakpoint.tablet}) {
    .posts-heading {
      &-1 {
        grid-area: 1 / 1 / 2 / 2;
      }

      &-2 {
        grid-area: 1 / 5 / 2 / 6;
      }
    }

    .post {
      ${(props) => props.selectedGrid}
    }

    .pagination {
      grid-area: 5 / 1 / 6 / 11;
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    grid-template-columns: repeat(4, 1fr);
    gap: 8px;

    .posts-heading {
      &-1 {
        grid-area: 1 / 1 / 2 / 2;
      }

      &-2 {
        grid-area: 1 / 4 / 2 / 5;
      }
    }

    .post {
      ${(props) => props.selectedGrid}
    }

    .pagination {
      grid-area: 8 / 1 / 9 / 5;
    }
  }
`
export const StyledPostsTitle = styled.h1`
  width: 0;
  font-size: 4.688vw;
  font-weight: 900;
  color: transparent;
  text-transform: uppercase;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: ${theme.color.white};
  transform: rotate(90deg) translateY(-125%);
  transform-origin: 0 0;

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: 7.0588235294117645vw;
    -webkit-text-stroke-width: 0.8px;
    letter-spacing: 1px;
    transform: rotate(90deg) translateY(-175%);
  }
`

export const StyledPost = styled.li`
  position: relative;
  background: ${theme.color.red};
  padding: 1.5625vw 1.5625vw calc(1.5625vw / 4);
  aspect-ratio: 1 / 1.4;
  cursor: pointer;

  .post-texture {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 5;
    opacity: 0.8;
    mix-blend-mode: screen;
    pointer-events: none;
  }

  .image-wrapper {
    position: relative;
    width: 100%;
    height: 100%;

    .texture {
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      pointer-events: none;

      &.cloth {
        z-index: 1;
        opacity: 0.3;
        mix-blend-mode: hard-light;
      }

      &.grunge {
        z-index: 2;
        opacity: 0.4;
        mix-blend-mode: darken;
      }

      &.scraces {
        z-index: 3;
        opacity: 0.4;
        mix-blend-mode: hard-light;
      }

      &.cracks {
        z-index: 4;
        opacity: 0.2;
        mix-blend-mode: soft-light;
      }
    }
  }

  @media (max-width: ${theme.breakpoint.tablet}) {
    font-size: ${theme.font.size.base};
    padding: 2.3529411764705883vw 2.3529411764705883vw
      calc(2.3529411764705883vw / 2);
  }
`

export const StyledPostTitle = styled.h1`
  font-size: clamp(${theme.font.size.xs}, 1.042vw, ${theme.font.size.lg});
  font-weight: 700;
  text-transform: uppercase;
  padding-top: 0.75rem;
`
