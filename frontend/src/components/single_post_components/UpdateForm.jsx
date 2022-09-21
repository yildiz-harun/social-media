import { useState } from "react"

function UpdateForm({ newPost, setNewPost }) {
	return (
		<div>
			<input
				onChange={(e) => {
					setNewPost(e.target.value)
				}}
				value={newPost}
				type="text"
				className=" w-full text-sm outline-none"
			/>
		</div>
	)
}

export default UpdateForm
