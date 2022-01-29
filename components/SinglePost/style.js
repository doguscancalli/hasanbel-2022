import styled from 'styled-components'
import theme from '../../theme'

export const StyledSinglePost = styled.article``

export const StyledPostImage = styled.div`
  position: relative;
  aspect-ratio: 1 / 1.4;
`
export const StyledPostImageSource = styled.a`
  position: absolute;
  right: 0;
  bottom: 0;
  text-transform: uppercase;
  font-family: ${theme.font.family.heading};
  font-weight: 900;
  z-index: 1;
  padding: 1.25rem 1.25rem 0.75rem 1.25rem;
  text-shadow: 0 2px 8px rgba(0, 0, 0, 0.8);

  @media (max-width: ${theme.breakpoint.tablet}) {
    padding: 0.75rem 0.75rem 8px 0.75rem;
    font-size: ${theme.font.size.sm};
  }
`
export const StyledPostContent = styled.div`
  margin-top: 4.688vw;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    margin-top: 4.706vw;
  }
`

export const StyledPostMeta = styled.div`
  display: flex;
  gap: 30px;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    flex-direction: column;
  }
`

export const StyledPostMetaCol = styled.div`
  flex: 1;
`

export const StyledPostTitle = styled.h1`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.xl};
  font-weight: 900;
  text-transform: uppercase;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.lg};
  }
`

export const StyledPostDate = styled.h3`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.base};
  font-weight: 900;
  text-transform: uppercase;
  margin-top: 1.25rem;
  opacity: 0.2;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.xs};
    margin-top: 0.75rem;
  }
`

export const StyledPostText = styled.div`
  word-wrap: break-word;
  line-height: 1.618;

  & > * {
    margin-bottom: 1.25rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.sm};
  }
`

export const StyledCommentSection = styled.div`
  display: flex;
  gap: 30px;
  margin-top 5.625rem;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    flex-direction: column;
  }
`

export const StyledNewCommentCol = styled.div`
  flex: 1;
`
export const StyledNewComment = styled.div`
  max-width: 500px;
`

export const StyledNewCommentTitle = styled.h1`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.xl};
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1.25rem;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.lg};
  }
`
export const StyledComments = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  max-width: 500px;
`

export const StyledCommentsTitle = styled.h1`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.xl};
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 0.5rem;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.lg};
  }
`

export const StyledComment = styled.li`
  background: ${theme.color.white};
  color: ${theme.color.black};
  padding: 1.5rem;
`

export const StyledCommentMeta = styled.div`
  display: flex;
  justify-content: space-between;
`

export const StyledCommentName = styled.h2`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.lg};
  font-weight: 900;
  text-transform: uppercase;
`

export const StyledCommentDate = styled.h2`
  font-family: ${theme.font.family.heading};
  font-size: ${theme.font.size.base};
  font-weight: 900;
  text-transform: uppercase;
  opacity: 0.2;

  @media (max-width: ${theme.breakpoint.mobileL}) {
    font-size: ${theme.font.size.sm};
  }
`

export const StyledCommentText = styled.p``
