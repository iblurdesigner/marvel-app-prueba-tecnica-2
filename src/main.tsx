import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Router } from './router/index.tsx'

const MINUTE = 1000 * 60

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 10 * MINUTE,
    },
  },
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Suspense fallback={<div>Cargando...</div>}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>  
    </Suspense>
  </React.StrictMode>,
)
