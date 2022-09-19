import axios from 'axios'
import { useState } from 'react'

function PostForm() {
  const [post, setPost] = useState('')

  return (
    <form
      className="border border-t-0 p-1"
      onSubmit={async (e) => {
        e.preventDefault()
        const response = await axios.post(
          'http://localhost:5000/api/posts',
          {
            value: post,
          }
        )
      }}
    >
      <textarea
        onChange={(e) => {
          setPost(e.target.value)
        }}
        value={post}
        className="w-full outline-none text-sm overflow-hidden"
        type="text"
        placeholder="What' s happening?"
      />
      <div className="flex justify-end">
        <button className="bg-blue-500 text-white rounded-md text-[10px] p-[2px] w-12 h-6">
          Submit
        </button>
      </div>
    </form>
  )
}

export default PostForm
