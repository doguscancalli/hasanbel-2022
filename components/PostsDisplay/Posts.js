import React, { useEffect, useState } from 'react'
import { css } from 'styled-components'
import { useMedia } from 'react-media'
import theme from '../../theme'

// Data
import { gridDesktop, gridMobile } from '../../data/grid'

// Component
import { StyledPosts, StyledPostsTitle } from './style'
import Post from './Post'
import { Pagination } from '../index'

const Posts = ({ posts }) => {
  const [currentPage, setCurrentPage] = useState(posts?.page)
  const [selectedGrid, setSelectedGrid] = useState('')

  const isSmallScreen = useMedia({
    query: `(max-width: ${theme.breakpoint.tablet})`,
  })

  useEffect(() => {
    setCurrentPage(posts?.page)
    handleGrid(currentPage)
    /* eslint-disable-next-line */
  }, [posts, currentPage, isSmallScreen])

  const handleGrid = (page) => {
    let styles = ''
    let currentGrid = isSmallScreen ? gridMobile : gridDesktop
    let grid = currentGrid[0]

    let random = Math.floor(Math.random() * currentGrid?.length)

    if (page !== 1) grid = currentGrid[random]

    for (let i = 0; i < grid?.length; i++) {
      styles += `
      &-${i + 1} {
        grid-area: ${grid[i]};
      }
    `
    }

    setSelectedGrid(
      css`
        ${styles}
      `
    )
  }

  return (
    <StyledPosts selectedGrid={selectedGrid}>
      {posts?.page === 1 && (
        <>
          <li className='posts-heading-1'>
            <StyledPostsTitle data-type='title'>SON</StyledPostsTitle>
          </li>
          <li className='posts-heading-2'>
            <StyledPostsTitle data-type='title'>YAZILARIM</StyledPostsTitle>
          </li>
        </>
      )}
      {posts.docs.map((post, index) => (
        <Post key={post._id} post={post} className={`post-${index + 1}`} />
      ))}
      <li className='pagination'>
        <Pagination posts={posts} />
      </li>
    </StyledPosts>
  )
}

export default Posts
