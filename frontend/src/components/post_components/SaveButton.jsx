import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import { updatePost } from "../../features/posts/postSlice"

function SaveButton({ setIsUpdating, newPost, post }) {
	const dispatch = useDispatch()

	const handleClick = async () => {
		setIsUpdating(false)
		dispatch(updatePost({ value: newPost, _id: post._id }))
		//patch request
		const response = await axios.patch(
			"http://localhost:5000/api/posts/" + post._id,
			{
				value: newPost,
			}
		)
	}

	return (
		<div className="flex justify-end">
			<button
				onClick={handleClick}
				className=" bg-blue-500 text-white rounded-md text-[10px]  p-[2px] w-12 h-6"
			>
				Save
			</button>
		</div>
	)
}

export default SaveButton
