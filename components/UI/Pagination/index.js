import React from 'react'
import { useRouter } from 'next/router'

// Component
import { StyledPagination, StyledPaginationItem } from './style'

const Pagination = ({ posts }) => {
  const { totalPages } = posts

  const router = useRouter()
  const { query } = router

  const pageNumbers = []
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i)
  }

  const handleRouting = (page) => {
    if ((page === 1 && !query?.page) || ~~query?.page === page) return
    router.push(`?page=${page}`, undefined, { shallow: true })
  }

  const handleCurrentPage = (page) => {
    if (!query?.page && page === 1) return true
    return ~~query?.page === page ? true : false
  }

  return (
    <StyledPagination>
      {pageNumbers?.map((page) => (
        <StyledPaginationItem
          key={page}
          currentPage={handleCurrentPage(page)}
          onClick={() => handleRouting(page)}
        >
          <span>{page}</span>
        </StyledPaginationItem>
      ))}
    </StyledPagination>
  )
}

export default Pagination
