import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BsMinecartLoaded } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiPercent } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import UserContext from '../utils/userContext';
import { CiUser } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import { MdOutlineDarkMode } from "react-icons/md";
import ThemeContext from '../utils/themeContext'

const Header = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const [isLogged, setLogged] = useState(false)
   
    console.log(theme);
    const dark = {
        background: "black",
       
    }
    const light = {
        background: "white"
    }


    return (
        <div className='flex justify-between items-center px-4 py-6 shadow-lg gap-2
        border-b border-[#2d2e320e] '  style={theme.mode === "dark" ? dark : light}   >
            <div className='text-2xl font-bold head tracking-wider text-[#de9c37]'>The Foodie Express</div>
            <div >
                <ul className='flex flex-wrap gap-8 text-lg font-semibold tracking-wide text-[#5a626b] ' >
                    <NavLink to={'home'}><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><IoHomeOutline />Home</li></NavLink>
                    <Link>  <li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><CiPercent />Offers</li></Link>
                    <Link><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><IoIosHelpCircleOutline />Help</li>
                    </Link>
                    <Link><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><BsMinecartLoaded />Cart</li>
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
                            setLogged(true); toast.success(`Loggen in! Welcome ${user.name}`, {
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
                            else{
                                setTheme({
                                    mode: "light"
                                })
                            }
                        }}>Dark Mode <MdOutlineDarkMode /></li>
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
