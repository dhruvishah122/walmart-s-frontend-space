'use client'
import { Helmet } from 'react-helmet';
import {useQuery} from '@tanstack/react-query'
import axios from 'axios'
import Image from 'next/image'
import {useRouter} from 'next/navigation'
import React, {useEffect, useState} from 'react'
import {FaStar} from 'react-icons/fa'
import SkeletonSingleProductPage from '../skeletonSingleProductPage/SkeletonSingleProductPage'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import {increment} from '@/redux/wishListSlice'
import {cartIncrement} from '@/redux/cartListSlice'
import {addToWishListItem} from '@/redux/wishListItemSlice'
import {addToCartList} from '@/redux/cartItemSlice'
import './button.css'
const fetchProductById = async (id: any) => {
  try {
    const res = await axios.get(`https://fakestoreapi.com/products/${id}`)
    console.log('API response:', res.data)
    return res.data
  } catch (error) {
    console.error('Failed to fetch product:', error)
    throw error
  }
}

const SingleProductPage = ({id}: {id: string}) => {
  const {data, status} = useQuery<any>({
    queryKey: ['product', id],
    queryFn: async () => {
      return fetchProductById(id)
    },
    enabled: !!id,
  })

  const countValue = useSelector((state: RootState) => state.counter.value)

  const dispatch = useDispatch()

  const [count, setCount] = useState(1)

  const [price, setPrice] = useState(0)

  const router = useRouter()

  useEffect(() => {
    if (data) {
      setPrice(data.price)
    }
  }, [data])

  const handleOnCountClick = (action: string) => {
    if (action === 'increment') {
      setCount((prevCount) => {
        setPrice((prevCount + 1) * data?.price)
        return prevCount + 1
      })
    } else if (action === 'decrement' && count > 0) {
      setCount((prevCount: number) => {
        if (prevCount > 1) {
          setPrice((prevCount - 1) * data?.price)
          return prevCount - 1
        }
        setPrice(prevCount * data?.price)
        return prevCount
      })
    }
  }

  if (status === 'pending') {
    return (
      <div>
        <SkeletonSingleProductPage />
      </div>
    )
  }

  if (status === 'success' && !data) {
    router.push('/')
  }

  const handleOnWishlistClick = (product: any) => {
    dispatch(increment())
    dispatch(addToWishListItem(product))
  }

  const handleOnCartListClick = (product: any) => {
    dispatch(cartIncrement())
    dispatch(addToCartList(product))
  }

  return (

    <div className='SingleProductPage'>
     <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </Helmet>
      <div className='SingleProductPage_wrapper'>
        <div className='btn_room'>
    <a href="http://127.0.0.1:5000" className="circle-button-link">
    Try-your-choice
        <button className="circle-button">
            <span className="material-symbols-outlined">
                checkroom
            </span>
        </button>
    </a>
</div>
        <div className='SingleProductPage_left'>
          <Image
            src={data.image}
            alt='img'
            width={300}
            height={300}
            className='img'
          />

        </div>



        <div className='SingleProductPage_right'>
          <h2 className='product_title'>{data.title}</h2>
          <div className='price_wrapper'>
            <h1 className='price'>${data.price}</h1>
            <h3 className='rating'>
              {data?.rating?.rate}
              <span>
                <FaStar />
              </span>
            </h3>
          </div>


          <div className='product_description'>
            <h3>Description:</h3>
            <div className='description'>{data.description}</div>
          </div>
          <div className='total_count_price_wrapper'>
            <div className='total_count'>
              <strong>QUANTITY</strong>
              <div className='add_btn_wrapper'>
                <button
                  onClick={() => handleOnCountClick('decrement')}
                  className='minus'
                >
                  -
                </button>
                <div className='count'>{count}</div>
                <button
                  onClick={() => handleOnCountClick('increment')}
                  className='minus'
                >
                  +
                </button>
              </div>
            </div>
            <div className='total_price'>
              <strong>TOTAL PRICE</strong>
              <div className='price'>${price?.toFixed(2)}</div>
            </div>
          </div>

          <div className='btn_wrapper'>
            <button
              onClick={() => handleOnWishlistClick(data)}
              className='add_to_wishlist'
            >
              ADD TO MY WISHLIST
            </button>
            <br />
            <button
              onClick={() => handleOnCartListClick(data)}
              className='add_to_cart'
            >
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleProductPage
