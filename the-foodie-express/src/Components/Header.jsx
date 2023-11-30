import React from 'react'

const Header = ({ dark }) => {

    return (
        <div className='flex justify-between items-center px-4 py-2 gap-2 border-b border-[#2d2e320e]'  >
            <div className='text-2xl font-bold head tracking-wider text-[#de9c37]'>The Foodie Express</div>
            <div>
                <ul className='flex gap-6 text-lg font-semibold tracking-wide text-[#2d2e32]' >
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
