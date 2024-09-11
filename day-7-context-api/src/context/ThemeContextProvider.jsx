import { createContext, useState } from "react";
import toast from "react-hot-toast";

export const ThemeContext = createContext()


function ThemeContextProvider(props) {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
    toast.success('Theme Changed to ' + theme )    
    }
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider

