import React from 'react'

const Header = ({ dark }) => {
    const darkStyle = {
        background: "#35333f",
        color: "white",
        transition: "all .2s "
    }
    const lightStyle = {
        background: "white",
        color: "black",
        transition: "all .2s "

    }
    return (
        <div className='flex justify-between items-center px-4 py-2 gap-2 border-b border-[#2d2e320e]' style={dark === true ? darkStyle : lightStyle}  >
            <div className='text-2xl font-bold head tracking-wider text-[#de9c37]'>The Foodie Express</div>
            <div>
                <ul className='flex gap-6 pr-32 text-lg font-semibold tracking-wide text-[#2d2e32]' style={dark === true ? darkStyle : lightStyle}>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Header
