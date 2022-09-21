import { useSelector, useDispatch } from "react-redux"
import { addUser, removeUser } from "../features/user/userSlice"

import axios from "axios"
import { useState } from "react"
import { Link } from "react-router-dom"

export const LoginForm = () => {
	const [username, setUsername] = useState("")
	const [password, setPassword] = useState("")

	const dispatch = useDispatch()

	const handleSubmit = async (e) => {
		e.preventDefault()

		const response = await axios.post("http://localhost:5000/api/user/login", {
			username: username,
			password: password,
		})

		// // store object to the cookies
		// let user = {
		//   username: response.data.username,
		//   token: response.data.token,
		// }
		document.cookie = JSON.stringify(response.data)
		dispatch(addUser(response.data))
		//save the token
	}

	return (
		<form
			onSubmit={handleSubmit}
			className="flex flex-col p-2 w-11/12 shadow-md rounded-md max-w-md"
		>
			<label>Username: </label>
			<input
				onChange={(e) => {
					setUsername(e.target.value)
				}}
				value={username}
				placeholder="Enter your username"
				className="border rounded-md border-gray-900 my-3 p-3"
				type="text"
			/>
			<label>Password: </label>
			<input
				onChange={(e) => {
					setPassword(e.target.value)
				}}
				value={password}
				placeholder="Enter your password"
				className="border rounded-md border-gray-900 my-3 p-3"
				type="password"
			/>
			<label htmlFor="">
				Don't have an account? Click here to:{" "}
				<Link
					to={"/register"}
					className="cursor-pointer underline text-blue-700"
				>
					Register
				</Link>
			</label>
			<button className="border rounded-md bg-green-500 border-none hover:bg-green-600 my-3 p-3 text-white">
				Log in
			</button>
		</form>
	)
}
