import { createContext, useState } from "react";
import toast from "react-hot-toast";
// creating context 

export const AuthContext = createContext();

function AuthContextProvider(props){
    const [isAuth , setAuth] = useState(false);
    const {children} = props;

    const login = ()=>{
        setAuth(true)
        toast.success('logged in ')
    }
    const logout= ()=>{
        setAuth(false)
        toast.success('logged out ')

    }

    return (
        <AuthContext.Provider value ={{isAuth,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider