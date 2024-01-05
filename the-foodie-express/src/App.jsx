import Header from "./Components/Header"
import SearchBar from "./Components/SearchBar"
import Home from "./Components/Home"
import About from "./Components/About"
import { useContext, useState } from "react"
import Pizza from "./Components/Pizza"
import Burger from "./Components/Burger"
import UserContext from "./utils/userContext"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,

} from "react-router-dom";
import Cake from "./Components/Cakes"
import Sandwich from "./Components/Sandwhich"
import DetailedRestMenu from "./Components/DetailedRestMenu"

function App() {
   const [user, setUser] = useState({
     name: "Aayush",
     mail: "ayush12@gmail.com"
   })
  // const { user } = useContext(UserContext)

  return (
    <UserContext.Provider value={{
      user: user
    }}  >
      <Header user={user} />
      <Outlet />
    </UserContext.Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: '/pizza',
        element: <Pizza />
      },
      {
        path: '/burger',
        element: <Burger />
      },
      {
        path: "/cake",
        element: <Cake />
      }, {
        path: '/sandwich',
        element: <Sandwich />
      },
      {
        path: '/restaurant/:id',
        element: <DetailedRestMenu />
      }

    ]
  }
])
export default appRouter
