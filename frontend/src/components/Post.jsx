import { useState } from "react"
import axios from "axios"
import DeleteButton from "./post_components/DeleteButton"
import UpdateButton from "./post_components/UpdateButton"
import PostContent from "./post_components/PostContent"
import SaveButton from "./post_components/SaveButton"
import UpdateForm from "./post_components/UpdateForm"

function Post({ post }) {
	const [isUpdating, setIsUpdating] = useState(false)

	const [newPost, setNewPost] = useState("")

	return (
		<div className="border text-sm p-1 mt-1">
			{!isUpdating && (
				<div>
					<div>
						<PostContent post={post} />
					</div>
					<div className="flex justify-end">
						<UpdateButton
							post={post}
							setIsUpdating={setIsUpdating}
							setNewPost={setNewPost}
						/>
						<DeleteButton post={post} />
					</div>
				</div>
			)}

			{isUpdating && (
				<div>
					<UpdateForm newPost={newPost} setNewPost={setNewPost} />
					<SaveButton
						setIsUpdating={setIsUpdating}
						newPost={newPost}
						post={post}
					/>
				</div>
			)}
		</div>
	)
}

export default Post
