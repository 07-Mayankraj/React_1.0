import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";
import { AuthContext } from "../context/AuthContextProvider";


// use the context provider to create a theme
// import use context and contextProvider 
// get the value of the context
function Navbar(){
    const {theme , toggleTheme} = useContext(ThemeContext);
    const {isAuth, login,logout}= useContext(AuthContext)

    return <div className="navbar" style={{
        background : theme === "dark" ? "black" : 'white',
        color : theme === "dark" ? 'white' : 'black' 
    }}>
         <ul>
             <li>Home</li>
             <li>About</li>
             <li>Contact</li>
             <li onClick={toggleTheme} >{theme}</li>
             <li>{isAuth ? 'logged in  ' : 'logged out'}</li>
             <button disabled={isAuth} onClick={login}>Login</button>
             <button disabled={!isAuth} onClick={logout}>Logout</button>

         </ul>
    </div>
}

export default Navbar;