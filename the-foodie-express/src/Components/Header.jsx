import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useEffect } from 'react'
import { BsMinecartLoaded } from "react-icons/bs";
import { CiLogin } from "react-icons/ci";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { CiPercent } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import UserContext from '../utils/userContext';

const Header = () => {
    const { user } = useContext(UserContext)
    return (

        <div className='flex justify-between items-center px-4 py-6 shadow-lg gap-2
         border-b border-[#2d2e320e] '    >
            <div className='text-2xl font-bold head tracking-wider text-[#de9c37]'>The Foodie Express</div>
            <div >
                <ul className='flex gap-8 text-lg font-semibold tracking-wide text-[#5a626b]' >
                    <NavLink to={'home'}><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><IoHomeOutline />Home</li></NavLink>
                    <Link>  <li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><CiPercent />Offers</li></Link>
                    <Link><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><IoIosHelpCircleOutline />Help</li>
                    </Link>
                    <Link><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><BsMinecartLoaded />Cart</li>
                    </Link>
                    <Link><li className='flex items-center gap-1 hover:text-orange-600 transition duration-100'><CiLogin />Login :
                    <span>{user.name}</span></li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Header
