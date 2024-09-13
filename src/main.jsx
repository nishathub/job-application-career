import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import './App.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Home from './Component/Home/Home.jsx'
import Root from './Component/Root/Root.jsx'
import Footer from './Component/Footer/Footer.jsx'
import Header from './Component/Header/Header.jsx'
import About from './Component/About/About.jsx'
import Jobs from './Component/Jobs/Jobs.jsx'
import Applied from './Component/Applied/Applied.jsx'
import Blog from './Component/Blog/Blog.jsx'
import Statistics from './Component/Statistics/Statistics.jsx'
import ErrorPage from './Component/ErrorPage/ErrorPage.jsx'
import JobDetails from './Component/JobDetails/JobDetails.jsx'
import { HelmetProvider } from 'react-helmet-async'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('jobs.json')
      },
      {
        path: '/Footer',
        element: <Footer></Footer>
      },
      {
        path: '/Header',
        element: <Header></Header>
      },
      {
        path: '/About',
        element: <About></About>
      },
      {
        path: '/Jobs',
        element: <Jobs></Jobs>
      },
      {
        path: '/Applied',
        element: <Applied></Applied>,
        loader: () => fetch('../jobs.json')
      },
      {
        path: '/Blog',
        element: <Blog></Blog>
      },
      {
        path: '/Statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/JobDetails/:jobId',
        element: <JobDetails></JobDetails>,
        loader: () => fetch('../jobs.json')
      },
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <HelmetProvider>
    <RouterProvider router={router}></RouterProvider>
  </HelmetProvider>
)
