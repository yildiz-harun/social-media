import { Link } from 'react-router-dom'
import logo from '../../src/logo.svg'

export const Navbar = () => {
  return (
    <Link
      to={'/'}
      className="flex justify-start items-center h-12 mb-36 md:mb-0"
    >
      <img
        className="w-12 h-12"
        src={logo}
        alt="logo"
      />
      <h1 className="text-lg">Social Media</h1>
    </Link>
  )
}
