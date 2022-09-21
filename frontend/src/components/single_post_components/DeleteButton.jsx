import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { deletePost } from "../../features/posts/postSlice"

function DeleteButton({ post }) {
	const dispatch = useDispatch()
	const user = useSelector((state) => state.user.value)

	const handleClick = async () => {
		dispatch(deletePost(post))
		const response = await axios.delete(
			"http://localhost:5000/api/posts/" + post._id,
			{
				headers: { Authorization: "Bearer " + user.token },
			}
		)
	}

	return (
		<button
			onClick={handleClick}
			className="bg-blue-500 text-white rounded-md text-[10px] p-[2px] w-12 h-6"
		>
			Delete
		</button>
	)
}

export default DeleteButton
