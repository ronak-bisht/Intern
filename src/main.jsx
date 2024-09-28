import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './Store/Store.js'
createRoot(document.getElementById('root')).render(

      // Provider makes the store available throughout the app
       <Provider store={store}>
         {/* wrapping App with BrowserRouter so that app can use routing */}
      <BrowserRouter> 
         <App />
      </BrowserRouter>
      </Provider>
   

)
