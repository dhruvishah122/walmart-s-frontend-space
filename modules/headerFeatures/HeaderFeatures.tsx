import Image from 'next/image'
import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'
import {MdOutlineLocationOn} from 'react-icons/md'
import {IoHomeOutline} from 'react-icons/io5'
import useResponsive from '@/customHooks/useResponsive'

const headerFeaturesLeftArray = [
  {
    id: 1,
    icon: <MdOutlineLocationOn />,
    text: 'Sacramento, 95829',
  },
  {
    id: 2,
    icon: <IoHomeOutline />,
    text: 'Sacramento, Supercenter',
  },
]
const headerFeaturesRightArray = [
  {
    id: 1,
    text: 'Deals',
  },
  {
    id: 2,
    text: 'Grocery & Essentials',
  },
  {
    id: 3,
    text: 'Mothers day',
  },
  {
    id: 4,
    text: 'Teacher Appreciation',
  },
  {
    id: 5,
    text: 'National Pet Month',
  },
  {
    id: 6,
    text: 'Home',
  },
  {
    id: 7,
    text: 'Fashion',
  },
]

const HeaderFeatures = () => {
  const screenSize = useResponsive()

  return (
    <div className='headerFeatures_wrapper'>
      <div className='headerFeatures_left'>
        <div className='headerFeatures_left_img'>
          <Image
            alt='features_logo'
            src={
              'https://i5.walmartimages.com/dfw/4ff9c6c9-ad46/k2-_0a671c38-d307-447c-835e-7904ab143c26.v1.png'
            }
            width={30}
            height={32}
          />
          <div className='headerFeatures_left_text'>
            How do you want your items?{' '}
            <span>
              <IoIosArrowDown />
            </span>
          </div>
        </div>
        <div
          className={
            screenSize === 'small' || screenSize === 'medium'
              ? 'displayNone'
              : 'vertical'
          }
        ></div>
        <div className='headerFeatures_left_array_wrapper'>
          {headerFeaturesLeftArray.map((item) => (
            <div
              key={item.id}
              className={
                screenSize === 'small' || screenSize === 'medium'
                  ? 'displayNone'
                  : 'icons'
              }
            >
              <div className='icon'>{item.icon}</div>
              <div className='text'>{item.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div className='headerFeatures_right'>
        {headerFeaturesRightArray.map((item) => (
          <div
            key={item.id}
            className={
              screenSize === 'small' || screenSize === 'medium'
                ? 'displayNone'
                : 'headerFeatures_right_text'
            }
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HeaderFeatures
