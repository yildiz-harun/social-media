import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export const RegisterForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()

    const response = await axios.post(
      'http://localhost:5000/api/user/register',
      { username: username, password: password }
    )

    // // store object to the cookies
    // let user = {
    //   username: response.data.username,
    //   token: response.data.token,
    // }
    document.cookie =
      'user=' + JSON.stringify(response.data)
    //save the token
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col p-2 w-11/12 shadow-md rounded-md max-w-md"
    >
      <label>Username: </label>
      <input
        value={username}
        onChange={(e) => {
          setUsername(e.target.value)
        }}
        placeholder="Enter your username"
        className="border rounded-md border-gray-900 my-3 p-3"
        type="text"
      />
      <label>Password: </label>
      <input
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        placeholder="Enter your password"
        className="border rounded-md border-gray-900 my-3 p-3"
        type="password"
      />
      <label htmlFor="">
        Have an account? Click here to:{' '}
        <Link
          to={'/login'}
          className="cursor-pointer underline text-blue-700"
        >
          Login
        </Link>
      </label>
      <button className="border rounded-md bg-green-500 border-none hover:bg-green-600 my-3 p-3 text-white">
        Register
      </button>
    </form>
  )
}
