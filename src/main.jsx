import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import About from './Components/About.jsx'
import ContactUs from './Components/ContactUs.jsx'
import Product from './Components/Product.jsx'

const router = createBrowserRouter([
  {
    path: '/', element: <Layout/>,
    children:[
      {
        path: "",
        element: <Home/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "contactus",
        element:<ContactUs/>
      },
      {
        path: "Product",
        element:<Product/>
      }
    ]
    
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
