import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import { useContext, useState } from "react"
import Pizza from "./Components/Pizza"
import Burger from "./Components/Burger"
import CartPage from "./Components/CartPage"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,

} from "react-router-dom";
import Cake from "./Components/Cakes"
import Sandwich from "./Components/Sandwhich"
import DetailedRestMenu from "./Components/DetailedRestMenu"
import ThemeContext from "./utils/themeContext"
import CartContext from "./utils/CartContext"

function App() {
  const [itemDetails, setDetails] = useState({
    price: 0,
    name: "no item added",
    totalItems: 0,
  })
  // const [theme, setTheme] = useState({
  //   mode: "light"
  // })

  // return (
  //   <ThemeContext.Provider  value={{
  //     theme: theme,
  //     setTheme: setTheme
  //   }} >
  //     <Header />
  //     <Outlet />
  //   </ThemeContext.Provider>
  // )
  return (
    <CartContext.Provider value={{
      itemDetails: itemDetails,
      setDetails: setDetails
    }} >
      <Header />
      <Outlet />
    </CartContext.Provider>
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
      },
      {
        path: '/cart',
        element: <CartPage />
      }

    ]
  }
])
export default appRouter
