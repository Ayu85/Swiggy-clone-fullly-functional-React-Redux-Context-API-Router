import Header from "./Components/Header"
import SearchBar from "./Components/SearchBar"
import Home from "./Components/Home"
import About from "./Components/About"
import { useState } from "react"
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
      }

    ]
  }
])
export default appRouter
