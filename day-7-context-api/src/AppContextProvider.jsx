import { createContext } from "react";

export  const ThemeContext = createContext()


/*
    C-->P-->C 

    1. c : create the context
    2. P : provide the value to the context : main.js 
    3. C : consume the value from the context : navbar.js
*/


