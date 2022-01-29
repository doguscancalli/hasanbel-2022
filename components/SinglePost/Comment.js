import React from 'react'
import { fromAgo } from '../../utils/handleDate'

// Component
import {
  StyledComment,
  StyledCommentMeta,
  StyledCommentName,
  StyledCommentDate,
  StyledCommentText,
} from './style'

const Comment = ({ comment }) => {
  const { name, text, createdAt } = comment

  return (
    <StyledComment>
      <StyledCommentMeta>
        <StyledCommentName>{name}</StyledCommentName>
        <StyledCommentDate>{fromAgo(createdAt)}</StyledCommentDate>
      </StyledCommentMeta>
      <StyledCommentText>{text}</StyledCommentText>
    </StyledComment>
  )
}

export default Comment
