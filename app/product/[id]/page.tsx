'use client'
import SingleProductPage from '@/modules/singleProductPage/SingleProductPage'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import React from 'react'

const queryClient = new QueryClient()
export default function Page({params}: {params: {id: string}}) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SingleProductPage id={params.id} />
      </QueryClientProvider>
    </>
  )
}
