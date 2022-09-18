import { useEffect } from 'react'
import {
  useSelector,
  useDispatch,
} from 'react-redux'
import {
  addUser,
  removeUser,
} from './features/user/userSlice'
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom' //react router package
import { Register } from './pages/Register'
import { Nopage } from './pages/Nopage'
import { Login } from './pages/Login'
import { Navbar } from './components/Navbar'
import Home from './pages/Home'

function App() {
  const dispatch = useDispatch()

  const user = useSelector(
    (state) => state.user.value
  )

  useEffect(() => {
    const foo = () => {
      if (document.cookie) {
        const user = JSON.parse(document.cookie)
        dispatch(addUser(user))
      }
    }
    foo()
  }, [])

  return (
    <div>
      <div className="max-w-4xl mx-auto h-screen">
        <BrowserRouter>
          <Navbar />
          <div className="flex justify-center">
            <Routes>
              <Route
                path="/"
                element={
                  user ? (
                    <Home />
                  ) : (
                    <Navigate to="login" />
                  )
                }
              />
              <Route
                path="register"
                element={
                  !user ? (
                    <Register />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="login"
                element={
                  !user ? (
                    <Login />
                  ) : (
                    <Navigate to="/" />
                  )
                }
              />
              <Route
                path="*"
                element={<Nopage />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App
