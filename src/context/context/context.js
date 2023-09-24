import React, { createContext, useReducer } from "react"

import themeReducer from "./../reducers/themeReducer.js"

export const ThemeContext = createContext()

export const AppProvider = (props) => {
    const themeInitialState = {
        theme: 'dark',
        color: {
            primary: '#40718D',
            secondary: '#6286A1',
            stone: '#173653',
            teal: '#368F80',
            light: '#FAFAFA',
            dark: '#1E1E1E',
        },
        typography: {
            fontFamily: [
                '-apple-system',
                'BlinkMacSystemFont',
                '"Segoe UI"',
                'Roboto',
                '"Helvetica Neue"',
                'Arial',
                'sans-serif',
                '"Apple Color Emoji"',
                '"Segoe UI Emoji"',
                '"Segoe UI Symbol"',
            ].join(','),
        },
    }
    const [state, dispatch] = useReducer(themeReducer, themeInitialState)

    return (
        <ThemeContext.Provider value={{ state: state, dispatch: dispatch }}>
            {props.children}
        </ThemeContext.Provider>
    )
}