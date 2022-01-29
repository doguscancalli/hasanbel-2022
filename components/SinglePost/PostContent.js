import React from 'react'

// Component
import { StyledPostContent } from './style'
import PostMeta from './PostMeta'
import CommentSection from './CommentSection'

const PostContent = ({ data }) => {
  return (
    <StyledPostContent>
      <PostMeta data={data} />
      <CommentSection data={data} />
    </StyledPostContent>
  )
}

export default PostContent
