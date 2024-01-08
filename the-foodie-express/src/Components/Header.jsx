import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsMinecartLoaded } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiPercent } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineDarkMode } from "react-icons/md";
import ThemeContext from '../utils/themeContext'
import CartContext from '../utils/CartContext';

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [isLogged, setLogged] = useState(false)
    const { itemDetails } = useContext(CartContext)
    console.log(theme);
    const dark = {
        background: "#242526",
        transition: "all .2s ease-in"
    }
    const light = {
        background: "white",
        transition: "all .2s ease-in"
    }


    return (
        <div className='flex justify-between items-center px-4 py-6 shadow-3xl gap-2
        border-b-2 border-[#2d2e320e] '  style={theme.mode === "dark" ? dark : light}   >
            <div className='text-2xl font-bold head tracking-wider text-[#de9c37]'>The Foodie Express</div>
            <div >
                <ul className='flex flex-wrap gap-8 text-lg font-semibold tracking-wide text-[#5a626b] ' style={theme.mode === "dark" ? { color: "#908d96" } : { color: "#5a626b" }}>
                    <NavLink to={'home'}><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><IoHomeOutline />Home</li></NavLink>
                    <Link>  <li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><CiPercent />Offers</li></Link>
                    <Link><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><IoIosHelpCircleOutline />Help</li>
                    </Link>
                    <Link to={"cart"} ><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><BsMinecartLoaded />Cart {itemDetails.totalItems}</li>
                    </Link>
                    <Link className='flex items-center flex-col justify-center '><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100' onClick={() => {
                        if (isLogged == true) {
                            setLogged(false)
                            toast.warn('Logged out!', {
                                position: "top-center",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",

                            });
                        } else {
                            setLogged(true); toast.success("Loggen in!", {
                                position: "top-center",
                                autoClose: 1000,
                                hideProgressBar: false,
                                closeOnClick: true,
                                pauseOnHover: true,
                                draggable: true,
                                progress: undefined,
                                theme: "colored",
                            });
                        }
                    }} ><CiLogin />{isLogged == true ? "Logout" : "Login"}
                    </li></Link>
                    <li className='flex items-center gap-1 hover:text-orange-600 transition duration-100 hover:cursor-pointer'
                        onClick={() => {
                            if (theme.mode === "light") {
                                setTheme({
                                    mode: "dark"
                                })
                            }
                            else {
                                setTheme({
                                    mode: "light"
                                })
                            }
                        }}>{theme.mode === "light" ? "Dark Mode" : "Light mode"} <MdOutlineDarkMode /></li>
                    <ToastContainer position="top-center"
                        autoClose={1000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="colored" />
                </ul>
            </div>

        </div>
    )
}

export default Header
