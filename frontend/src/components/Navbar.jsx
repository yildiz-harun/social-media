import {
  useSelector,
  useDispatch,
} from 'react-redux'
import {
  addUser,
  removeUser,
} from '../features/user/userSlice'

import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'

export const Navbar = () => {
  const dispatch = useDispatch()

  const user = useSelector(
    (state) => state.user.value
  )

  return (
    <div className=" bg-zinc-50 flex justify-between items-center h-12 ">
      <div className="flex items-center">
        <Link to={'/'}>
          <img
            className="w-12 h-12"
            src={logo}
            alt="logo"
          />
        </Link>
        <Link to={'/'}>
          <h1 className="text-lg">
            Lorem
          </h1>
        </Link>
      </div>
      <div className="flex items-center mr-2">
        <div className="flex items-center mr-2">
          {user && user.username}
        </div>
        {user && (
          <button
            onClick={() => {
              dispatch(removeUser())
              document.cookie = null
            }}
          >
            Log out
          </button>
        )}
      </div>
    </div>
  )
}
