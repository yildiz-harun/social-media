export const RegisterForm = () => {
  return (
    <form className="flex flex-col p-6 w-11/12 sm:w-3/5">
      <input
        placeholder="username"
        className="border border-gray-900 m-1 p-1.5"
        type="text"
      />
      <input
        placeholder="password"
        className="border border-gray-900 m-1 p-1.5"
        type="text"
      />
      <button className="border border-gray-900 m-1 p-1.5">
        Register
      </button>
    </form>
  )
}
