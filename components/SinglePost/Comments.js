import React from 'react'

// Component
import { StyledComments, StyledCommentsTitle } from './style'
import Comment from './Comment'

const Comments = ({ comments }) => {
  return (
    <StyledComments>
      <StyledCommentsTitle>YORUMLAR</StyledCommentsTitle>
      {comments.map((comment) => (
        <Comment key={comment._id} comment={comment} />
      ))}
    </StyledComments>
  )
}

export default Comments
