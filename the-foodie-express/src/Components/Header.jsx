import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = ({ dark }) => {

    return (
        <div className='flex justify-between items-center px-4 py-4 shadow-lg gap-2 border-b border-[#2d2e320e] boxshad'  >
            <div className='text-2xl font-bold head tracking-wider text-[#de9c37]'>The Foodie Express</div>
            <div>
                <ul className='flex gap-6 text-lg font-semibold tracking-wide text-[#2d2e32]' >
                    <NavLink to={'home'}><li>Home</li></NavLink>
                    <NavLink to={'about'}><li>About</li></NavLink>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
