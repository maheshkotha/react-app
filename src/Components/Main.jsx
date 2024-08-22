import React from 'react'
import { useTheme } from '../Providers/ThemeProvider'
import ToggleTheme from '../Features/ToggleTheme'

const Main = () => {

    const {theme } = useTheme()
  return (
    <div className={`main ${theme}`}>
        <h1>React Theme</h1>
        <ToggleTheme />
    </div>
  )
}

export default Main