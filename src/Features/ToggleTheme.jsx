import { useReducer } from "react"
import { useTheme } from "../Providers/ThemeProvider"



const ToggleTheme = () => {
    const {theme, dispatch } = useTheme()
    const toggleTheme = () => {
        dispatch({type: 'TOGGLE_THEME'})
    }

    return <div className="themeBtn">
        <button onClick={toggleTheme}>
            {
                theme === 'light' ? 
                <i className="fas fa-moon"></i> : 
                <i className="fas fa-sun" style={{color: '#fff'}} ></i>
            }
        </button>
    </div>
}

export default ToggleTheme