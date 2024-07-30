import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NewCounter from './components/NewCounter.jsx'
// import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'

const Home = lazy(() => import('./components/Home.jsx'))
const About = lazy(() => import('./components/About.jsx'))
const Contact = lazy(() => import('./components/Contact.jsx'))


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/counter',
        element: <NewCounter />,
      },
    ],
  },
])


ReactDOM.createRoot(document.getElementById('root')).render(<RouterProvider router={router} />)