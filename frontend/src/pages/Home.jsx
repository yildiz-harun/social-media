import React, { useEffect } from 'react'
import axios from 'axios'
import Post from '../components/Post'
import PostForm from '../components/PostForm'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import { setPost } from '../features/posts/postSlice'

function Home() {
  const dispatch = useDispatch()

  const posts = useSelector(
    (state) => state.posts.value
  )

  useEffect(() => {
    const foo = async () => {
      const response = await axios.get(
        'http://localhost:5000/api/posts'
      )
      console.log(response.data)
      dispatch(setPost(response.data))
      console.log(posts[0])
    }
    foo()
  }, [])

  return (
    <div className="w-screen min-h-screen">
      <div className="border mt-2 p-1">Home</div>
      <PostForm />
      {posts.map((post) => {
        return (
          <Post
            key={post._id}
            value={post.value}
          />
        )
      })}
    </div>
  )
}

export default Home
