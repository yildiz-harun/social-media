import React from 'react'
import Post from '../components/Post'
import PostForm from '../components/PostForm'

function Home() {
  return (
    <div className="w-screen min-h-screen">
      <div className="border mt-2 p-1">Home</div>
      <PostForm />
      <Post />
    </div>
  )
}

export default Home
