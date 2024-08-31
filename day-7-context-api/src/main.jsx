import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeContext } from './AppContextProvider.jsx'

// provide the value to the context wrap the app in context
createRoot(document.getElementById('root')).render(

    <ThemeContext.Provider value={{theme : 'dark'}}>
        <App />
    </ThemeContext.Provider>

)
