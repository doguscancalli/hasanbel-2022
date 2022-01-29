import React from 'react'

// Component
import { StyledSinglePost } from './style'
import PostImage from './PostImage'
import PostContent from './PostContent'

const SinglePost = ({ data }) => {
  return (
    <StyledSinglePost>
      <PostImage data={data} />
      <PostContent data={data} />
    </StyledSinglePost>
  )
}

export default SinglePost
