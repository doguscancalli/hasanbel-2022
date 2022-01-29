import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Component
import { StyledCommentSection, StyledNewCommentCol } from './style'
import NewComment from './NewComment'
import Comments from './Comments'

const CommentSection = ({ data }) => {
  const [comments, setComments] = useState([])

  const fetchComments = async () => {
    try {
      if (!data?.slug) return

      const options = {
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/comment/${data?.slug}`,
      }

      const {
        data: { data: fetchedComments },
      } = await axios(options)

      setComments(fetchedComments)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    fetchComments()
  }, [])

  return (
    <StyledCommentSection>
      <StyledNewCommentCol>
        <NewComment comments={comments} setComments={setComments} />
      </StyledNewCommentCol>
      <StyledNewCommentCol>
        <Comments comments={comments} />
      </StyledNewCommentCol>
    </StyledCommentSection>
  )
}

export default CommentSection
