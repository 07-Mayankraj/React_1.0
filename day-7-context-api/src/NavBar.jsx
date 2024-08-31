import { useContext } from "react";
import { ThemeContext } from "./AppContextProvider";


// use the context provider to create a theme
// import use context and contextProvider 
// get the value of the context
function Navbar(){
    const theme = useContext(ThemeContext);
    
    console.log(theme);
    return <div className="navbar">
         <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
             <li style={{
                 backgroundColor: theme.theme === 'dark'? 'black' : 'white',
                 color: theme.theme === 'dark'? 'white' : 'black'  // change color based on theme
             }}>{theme.theme}</li>

         </ul>
    </div>
}

export default Navbar;