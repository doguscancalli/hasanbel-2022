import axios from 'axios'
import React from 'react'

// Component
import { SinglePost } from '../components'

const Post = ({ data }) => {
  return (
    <>
      <SinglePost data={data} />
    </>
  )
}

export async function getServerSideProps({ query }) {
  const options = {
    method: 'get',
    url: `${process.env.NEXT_PUBLIC_WEBSITE_URL}/api/post/${query?.slug}`,
  }

  const {
    data: { data },
  } = await axios(options)

  return {
    props: { data },
  }
}

export default Post
