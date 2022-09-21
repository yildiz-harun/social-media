import React, { useEffect } from "react"
import axios from "axios"
import Post from "../components/Post"
import PostForm from "../components/PostForm"
import { useSelector, useDispatch } from "react-redux"
import { setPost } from "../features/posts/postSlice"

function Home() {
	const dispatch = useDispatch()
	const posts = useSelector((state) => state.posts.value)
	const user = useSelector((state) => state.user.value)

	console.log(user.token)
	useEffect(() => {
		const foo = async () => {
			const response = await axios.get("http://localhost:5000/api/posts", {
				headers: { Authorization: "Bearer " + user.token },
			})
			dispatch(setPost(response.data))
		}
		foo()
	}, [])

	return (
		<div className="w-screen min-h-screen">
			<div className="border mt-2 p-1">Home</div>
			<PostForm />
			{posts.map((post) => {
				return <Post key={post._id} post={post} />
			})}
		</div>
	)
}

export default Home
