import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ThemeContextProvider from './AppContextProvider.jsx'
ThemeContextProvider
// provide the value to the context wrap the app in context
createRoot(document.getElementById('root')).render(

    <ThemeContextProvider>
        <App />
    </ThemeContextProvider>

)
