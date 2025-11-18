import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Layout from './Layout.jsx'
import {Home, About, Contact, Signin, AdminDashboard} from './pages'

const router = createBrowserRouter([{
  path : '/',
  element : <Layout />,
  children:[
    {
      path : '',
      element: <Home />
    },
    {
      path : '/about',
      element: <About />
    },
    {
      path : '/contact',
      element: <Contact />
    },
    {
      path: '/sign-in',
      element: <Signin />
    }, 
    {
      path: '/admin-dashboard',
      element: <AdminDashboard />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
