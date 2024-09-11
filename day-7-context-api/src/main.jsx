import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import toast, { Toaster } from 'react-hot-toast';

import ThemeContextProvider from './context/ThemeContextProvider.jsx'
import AuthContextProvider from './context/AuthContextProvider.jsx';
// provide the value to the context wrap the app in context
createRoot(document.getElementById('root')).render(

    <AuthContextProvider>

        <ThemeContextProvider>
            <App />
            <Toaster position="top-right" />


        </ThemeContextProvider>
    </AuthContextProvider>

)
