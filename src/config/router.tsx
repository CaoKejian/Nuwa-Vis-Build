import React from'react'
import { createHashRouter, Navigate } from'react-router-dom' 
import Home from '../views/Home'
import MySelf from '../views/MySelf'
import ErrorPage from '../views/ErrorPage'
import Build from '../views/Build'

const router = createHashRouter([
  {
    path: '/',
    element: <Navigate to="/home" replace />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/myself',
    element: <MySelf />,
  }, 
  {
    path: '/build',
    element: <Build />,
  }, 
  {
    path: '*',
    element: <ErrorPage />
  }
])

export default router