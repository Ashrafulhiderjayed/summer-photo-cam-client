import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/router.jsx';
import AuthProvider from './providers/AuthProvider.jsx';
import { HelmetProvider } from 'react-helmet-async';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

const queryClient = new QueryClient()



ReactDOM.createRoot(document.getElementById('root')).render(
  <div style={{overflowX: 'hidden'}}>
    <React.StrictMode>
    <AuthProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <div className='max-w-screen-xl mx-auto overflow-x-hidden'>
          <RouterProvider router={router} />
        </div>
      </QueryClientProvider>
    </HelmetProvider>
    </AuthProvider>
  </React.StrictMode>,
  </div>
  
)
