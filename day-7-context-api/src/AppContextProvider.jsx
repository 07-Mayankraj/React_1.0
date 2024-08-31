import { createContext } from "react";

export const ThemeContext = createContext()


function ThemeContextProvider(props){
    return(
        <ThemeContext.Provider value={{theme : 'dark'}}>
            {props.children}
        </ThemeContext.Provider>
    )

}

export default ThemeContextProvider

