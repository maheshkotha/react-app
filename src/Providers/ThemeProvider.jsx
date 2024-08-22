import { createContext, useContext, useReducer } from "react";



const initialState = {
    theme: 'light'
}

export const themeReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_THEME': 
            return {...state, theme: state.theme === 'light' ? 'dark' : 'light' }
        
        default: return state;
    }
}


export const ThemeContext = createContext(null)

export const ThemeProvider = ({children}) => {

    const [state, dispatch] = useReducer(themeReducer, initialState);

    return (
        <ThemeContext.Provider value={{theme: state.theme, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}


export const useTheme = () => useContext(ThemeContext)
