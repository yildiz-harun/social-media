import { Link } from 'react-router-dom'

export const LoginForm = () => {
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
        Don't have an account? Click here to:{' '}
        <Link
          to={'/register'}
          className="cursor-pointer underline text-blue-700"
        >
          Register
        </Link>
      </label>
      <button className="border rounded-md bg-green-500 border-none hover:bg-green-600 my-3 p-3 text-white">
        <Link to={'/'}>Log in</Link>
      </button>
    </form>
  )
}
