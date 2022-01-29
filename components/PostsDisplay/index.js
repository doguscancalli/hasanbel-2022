import React from 'react'

// Component
import { StyledPostsDisplay } from './style'
import Posts from './Posts'

const PostsDisplay = ({ posts }, ref) => {
  return (
    <StyledPostsDisplay ref={ref}>
      <Posts posts={posts} />
    </StyledPostsDisplay>
  )
}

export default React.forwardRef(PostsDisplay)
