import axios from "axios"
function UpdateButton({ post, setIsUpdating, setNewPost }) {
	const handleClick = () => {
		setIsUpdating(true)
		setNewPost(post.value)

	}

	return (
		<button
			onClick={handleClick}
			className=" bg-blue-500 text-white rounded-md text-[10px] mr-1 p-[2px] w-12 h-6"
		>
			Update
		</button>
	)
}

export default UpdateButton
