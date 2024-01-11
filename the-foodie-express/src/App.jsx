import Header from "./Components/Header"
import Home from "./Components/Home"
import About from "./Components/About"
import { useContext, useState } from "react"
import Pizza from "./Components/Pizza"
import Burger from "./Components/Burger"
// import CartPage from "./Components/CartPage"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,

} from "react-router-dom";
import Cake from "./Components/Cakes"
import Sandwich from "./Components/Sandwhich"
// import DetailedRestMenu from "./Components/DetailedRestMenu"
import ThemeContext from "./utils/themeContext"
import CartContext from "./utils/CartContext"
import { lazy, Suspense } from "react"
import DetailedShimmer from "./Components/DetailedShimmer"
import { Provider } from "react-redux"
import ayushStore from "./utils/store"
const CartPage = lazy(() => import('./Components/CartPage'))
const DetailedRestMenu = lazy(() => import("./Components/DetailedRestMenu"))
function App() {
  // const [itemDetails, setDetails] = useState({
  //   price: 0,
  //   name: "no item added",
  //   totalItems: 0,
  // })

  const [theme, setTheme] = useState({
    mode: "light"
  })

  return (
    <Provider store={ayushStore}>
      <ThemeContext.Provider value={{
        theme: theme,
        setTheme: setTheme
      }} >
        <Header />
        <Outlet />
      </ThemeContext.Provider>
      </Provider>
  )
}
//   return (
//     <CartContext.Provider value={{
//       itemDetails: itemDetails,
//       setDetails: setDetails

//     }} >
//       <Header />
//       <Outlet />
//     </CartContext.Provider>
//   )
// }
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
        element: <Suspense fallback={<DetailedShimmer />}><DetailedRestMenu /></Suspense>
      },
      {
        path: '/cart',
        element: < Suspense fallback={<DetailedShimmer />}><CartPage /></Suspense >,
        errorElement: <h1>Error</h1>
      }

    ]
  }
])

export default appRouter
