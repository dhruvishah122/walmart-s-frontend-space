'use client'
import Login, {UserLogin} from '@/modules/login/Login'
import MainBanner from '@/modules/mainBanner/MainBanner'
import ProductPage from '@/modules/productPage/ProductPage'
// import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React, {useState} from 'react'

// const queryClient = new QueryClient()
const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const handleLogin = (loginData: UserLogin) => {
    setIsLoggedIn(true)
  }
  return (
    // <QueryClientProvider client={queryClient}>
    <div>
      {isLoggedIn ? (
        <>
          <MainBanner />
          <ProductPage />
        </>
      ) : (
        <Login
          isLoggedIn={isLoggedIn}
          setIsLoggedIn={setIsLoggedIn}
          onLogin={handleLogin}
        />
      )}
    </div>
    // </QueryClientProvider>
  )
}

export default LoginPage
