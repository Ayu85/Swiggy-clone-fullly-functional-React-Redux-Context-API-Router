import React, { createContext } from 'react'

const ThemeContext = createContext({
    theme: {
        mode: "light"
    }
})
export default ThemeContext
