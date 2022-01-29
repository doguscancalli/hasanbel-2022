import React, { useEffect, useState, useRef } from 'react'
import { useRouter } from 'next/router'
import axios from 'axios'

// Component
import { PostsDisplay } from '../components'

const Home = ({ data }) => {
  const [posts, setPosts] = useState(data)

  const postsRef = useRef(null)

  const router = useRouter()
  const { query } = router

  const source = axios.CancelToken.source()

  const fetchPosts = async (currentPage) => {
    try {
      const options = {
        method: 'get',
        url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/post?page=${currentPage}`,
        cancelToken: source.token,
      }

      const {
        data: { data: fetchedPosts },
      } = await axios(options)

      if (fetchedPosts?.docs?.length === 0) return

      setPosts(fetchedPosts)

      postsRef.current.scrollIntoView()
    } catch (err) {
      if (axios.isCancel(err)) {
      } else {
        throw err
      }
    }
  }

  useEffect(() => {
    let currentPage = ~~query?.page
    // if (currentPage === 0) return
    fetchPosts(currentPage)

    return () => {
      source.cancel()
    }
  }, [query])

  return (
    <>
      {posts?.docs?.length > 0 && <PostsDisplay posts={posts} ref={postsRef} />}
    </>
  )
}

export async function getServerSideProps({ query }) {
  if (~~query?.page !== 0) return { props: {} }

  const options = {
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/post`,
  }

  const {
    data: { data },
  } = await axios(options)

  return {
    props: { data },
  }
}

export default Home
