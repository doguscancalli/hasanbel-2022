import React from 'react'
import { exactDate } from '../../utils/handleDate'

// Component
import {
  StyledPostMeta,
  StyledPostMetaCol,
  StyledPostDate,
  StyledPostText,
  StyledPostTitle,
} from './style'

const PostMeta = ({ data }) => {
  const { title, text, createdAt } = data

  return (
    <StyledPostMeta>
      <StyledPostMetaCol>
        <StyledPostTitle>{title}</StyledPostTitle>
        <StyledPostDate>{exactDate(createdAt)}</StyledPostDate>
      </StyledPostMetaCol>
      <StyledPostMetaCol>
        <StyledPostText dangerouslySetInnerHTML={{ __html: text }} />
      </StyledPostMetaCol>
    </StyledPostMeta>
  )
}

export default PostMeta
