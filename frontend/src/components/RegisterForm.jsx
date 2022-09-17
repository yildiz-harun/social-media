import { Link } from 'react-router-dom'

export const RegisterForm = () => {
  return (
    <form className="flex flex-col p-6 w-11/12 shadow-md rounded-md max-w-md">
      <label>Username: </label>
      <input
        placeholder="Enter your username"
        className="border rounded-md border-gray-900 my-3 p-3"
        type="text"
      />
      <label>Password: </label>
      <input
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
        <Link to={'/'}>Register</Link>
      </button>
    </form>
  )
}
