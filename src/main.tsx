import React from 'react'
import ReactDOM from 'react-dom/client'
import './assets/css/index.css'
import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import routes from './routes'

ReactDOM.createRoot(document.getElementById('root')!).render(
  
    <RouterProvider router={routes}/>
  
)
