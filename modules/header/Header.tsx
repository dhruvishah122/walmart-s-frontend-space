'use client'
import useResponsive from '@/customHooks/useResponsive'
import Image from 'next/image'
import React, {useState} from 'react'
import {IoGridOutline} from 'react-icons/io5'
import {HiOutlineViewGrid} from 'react-icons/hi'
import {IoIosSearch} from 'react-icons/io'
import {FcLike} from 'react-icons/fc'
import {MdOutlinePerson} from 'react-icons/md'
import {GrCart} from 'react-icons/gr'
import {FiMenu} from 'react-icons/fi'
import HeaderFeatures from '../headerFeatures/HeaderFeatures'
import Sidebar from '../sidebar/Sidebar'
import {useRouter} from 'next/navigation'
import {useSelector} from 'react-redux'
import {RootState} from '@/redux/store'

const headerLeftArray = [
  {
    id: 1,
    icon: <IoGridOutline />,
    text: 'Departments',
  },
  {
    id: 2,
    icon: <HiOutlineViewGrid />,
    text: 'Services',
  },
]

const Header = () => {
  const countValue = useSelector((state: RootState) => state.counter.value)
  const cartCountValue = useSelector(
    (state: RootState) => state.cartCounter.cartValue
  )
  const router = useRouter()

  const handleOnSignInClick = () => {
    router.push('/login')
  }
  const handleOnHomeClick = () => {
    router.push('/')
  }
  const handleOnRecordMyItems = () => {
    router.push('/wishlist')
  }
  const handleOnCart = () => {
    router.push('/cart')
  }

  const headerRightArray = [
    {
      id: 1,
      icon: <FcLike />,
      smallText: 'Reorder',
      largeText: 'My Items',
      notification: countValue,
      onClick: handleOnRecordMyItems,
    },
    {
      id: 2,
      icon: <MdOutlinePerson />,
      smallText: 'Sign In',
      largeText: 'Account',
      onClick: handleOnSignInClick,
    },
  ]

  const screenSize = useResponsive()

  const [toggle, setToggle] = useState(false)
  console.log(toggle)

  const handleOnMenuClick = () => {
    setToggle((prevToggle) => !prevToggle)
  }

  return (
    <div className='header_wrapper'>
      <div className='header'>
        {screenSize === 'large' || screenSize === 'extraLarge' ? (
          <div onClick={handleOnHomeClick} className='logo'>
            <Image
              src='https://i5.walmartimages.com/dfw/63fd9f59-b3e1/7a569e53-f29a-4c3d-bfaf-6f7a158bfadd/v1/walmartLogo.svg'
              width={120}
              height={30}
              alt='Picture of the author'
            />
          </div>
        ) : (
          <div className='menu_wrapper'>
            <div className='menu' onClick={handleOnMenuClick}>
              <FiMenu />
            </div>
            <div className='mobile_logo'>
              <Image
                src='https://p7.hiclipart.com/preview/592/777/289/walmart-android-android.jpg'
                width={30}
                height={30}
                style={{color: '$icon_color'}}
                alt='Picture of the author'
              />
            </div>
          </div>
        )}
        <div
          className={
            screenSize === 'small' || screenSize === 'medium'
              ? 'displayNone'
              : 'header_left'
          }
        >
          {headerLeftArray.map((item) => (
            <div key={item.id} className='icons'>
              <div className='icon'>{item.icon}</div>
              <div className='text'>{item.text}</div>
            </div>
          ))}
        </div>
        <div className='search_wrapper'>
          <input
            className='input'
            type='text'
            placeholder='Search Everything at walmart online and at store'
          />
          <div className='search_icon'>
            <IoIosSearch />
          </div>
        </div>
        <div className='header_right'>
          {headerRightArray.map((item) => (
            <div
              key={item.id}
              className={
                screenSize === 'small' || screenSize === 'medium'
                  ? 'displayNone'
                  : 'header_right_wrapper'
              }
              // onClick={item?.smallText === 'Sign In' ? item.onClick : () => {}}
              onClick={item?.onClick}
            >
              <div className='header_right_icon'>{item.icon}</div>
              <div className='num_of_items'>{item.notification}</div>
              <div className='header_right_text_wrapper'>
                <div className='small_text'>{item.smallText}</div>
                <div className='large_text'>{item.largeText}</div>
              </div>
            </div>
          ))}
          <div onClick={handleOnCart} className='cart_wrapper'>
            <div className='cart_icon'>
              <div className='num_of_cart_items'>{cartCountValue}</div>
              <GrCart />
            </div>
            <div className='price'>$0.00</div>
          </div>
        </div>
      </div>
      <hr className='horizontal' />
      <HeaderFeatures />
      <div className='sidebar'>{toggle ? <Sidebar /> : ''}</div>
    </div>
  )
}

export default Header
