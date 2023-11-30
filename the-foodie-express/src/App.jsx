import Header from "./Components/Header"
import SearchBar from "./Components/SearchBar"
import Home from "./Components/Home"
import About from "./Components/About"
import { useState } from "react"
import Pizza from "./Components/Pizza"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,

} from "react-router-dom";

function App() {


  return (
    <div >
      <Header />
      <Outlet />
    </div>
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
      }

    ]
  }
])
export default appRouter
