'use client'

import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import {FaStar} from 'react-icons/fa'
import {useRouter} from 'next/navigation'
import SkeletonProductPage from '../skeletonProductPage/SkeletonProductPage'

const fetchProducts = async () => {
  const res = await axios.get('https://fakestoreapi.com/products')
  return res
}

const ProductPage = () => {
  const router = useRouter()
  const {data, status, error} = useQuery({
    queryKey: ['product'],

    queryFn: () => {
      return fetchProducts()
    },
  })
  console.log('product page', data)

  if (status === 'pending') {
    return (
      <div>
        <SkeletonProductPage />
      </div>
    )
  }
  if (status === 'error') {
    return <h1>{error.message}</h1>
  }

  const handleOnProductClick = (product: any) => {
    console.log('product', product)
    router.push(`/product/${product.id}`)
  }

  return (
    <div className='productPage'>
      <div className='productPage_wrapper'>
        {data?.data.map((product: any) => (
          <div key={product.id} className='product_info'>
            <div
              onClick={() => handleOnProductClick(product)}
              className='product_img'
            >
              <Image
                src={product.image}
                alt='product'
                width={300}
                height={300}
              />
            </div>
            <div className='product_img_text'>
              <div className='product_title' title={product.title}>
                {product.title}
              </div>
              <div className='product_text_info'>
                <div className='product_price'>
                  <div className='price_title'>Price</div>
                  <div className='price'>${product.price}</div>
                </div>
                <div className='product_rating'>
                  <div className='price_title'>Rating</div>
                  <div className='rating'>
                    {product.rating.rate}
                    <FaStar />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductPage
