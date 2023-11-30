import Header from "./Components/Header"
import SearchBar from "./Components/SearchBar"
import Home from "./Components/Home"
import FoodTypeBar from "./Components/FoodTypeBar"
import { useState } from "react"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,

} from "react-router-dom";

function App() {
  const [dark, setDark] = useState(false);
  const darkStyle = {
    background: "#2d2e32",
    color: "white",
    transition: "all .2s "

  }
  const lightStyle = {
    background: "white",
    color: "#2d2e32",
    transition: "all .2s "

  }
  return (
    <div style={dark === true ? { background: "#c6bacd", border: " 1px solid #c6bacd" } : { background: "#FFFFFF" }}>
      <>
        <label class="absolute right-0 top-3 pr-2 inline-flex items-center cursor-pointer" style={dark === true ? darkStyle : lightStyle}>
          <input type="checkbox" value="" class="sr-only peer" onChange={(e) => {
            if (e.target.checked) {
              setDark(true);
              console.log(dark);
            }
            else {
              setDark(false);
              console.log(dark);
            }
          }} />
          <div class="w-11 h-6 bg-orange-300 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300 ml-2" className={dark ? "text-white" : "text-black"} >Dark mode</span>
        </label>
      </>
      <Header dark={dark} />
      <FoodTypeBar />
      <Home dark={dark} />

    </div>
  )
}

export default App
