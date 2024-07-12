import Image from 'next/image'
import React from 'react'
import {IoNewspaperOutline} from 'react-icons/io5'
import {LuListStart} from 'react-icons/lu'
import {MdOutlinePerson2} from 'react-icons/md'
import {IoIosHelpCircleOutline} from 'react-icons/io'
import {FcLikePlaceholder} from 'react-icons/fc'
import {FiGift} from 'react-icons/fi'
import {IoGridOutline} from 'react-icons/io5'
import {HiOutlineViewGrid} from 'react-icons/hi'
import SidebarItem from '../sideItem/SidebarItem'

const Sidebar = () => {
  return (
    <div className='sidebar_wrapper'>
      <div className='logo_wrapper'>
        <div className='logo_icon'>
          <Image
            alt='logo'
            src={
              'https://toppng.com/uploads/preview/walmart-logo-116093818636rzzhelklx.png'
            }
            width={30}
            height={30}
          />
        </div>
        <div className='sign_in'>Sign in or create account</div>
      </div>
      <div className='walmart_wrapper'>
        <div className='walmart_logo'>
          <Image
            alt='logo'
            src={
              'https://i5.walmartimages.com/dfw/63fd9f59-ac39/29c6759d-7f14-49fa-bd3a-b870eb4fb8fb/v1/wplus-icon-blue.svg'
            }
            width={30}
            height={30}
          />
        </div>
        <div className='walmart'>Walmart+</div>
      </div>
      <hr className='horizontal'></hr>
      <div className='sidebarItem_wrapper'>
        <div className='item'>
          <SidebarItem
            optionText='Purchase History'
            OptionIcon={<IoNewspaperOutline />}
          />
          <SidebarItem optionText='My Items' OptionIcon={<LuListStart />} />
          <SidebarItem optionText='Account' OptionIcon={<MdOutlinePerson2 />} />
        </div>
        <hr className='horizontal'></hr>
        <div className='item'>
          <SidebarItem
            optionText='Help'
            OptionIcon={<IoIosHelpCircleOutline />}
          />
        </div>
        <hr className='horizontal'></hr>
        <div className='item'>
          <SidebarItem optionText='Lists' OptionIcon={<FcLikePlaceholder />} />
          <SidebarItem optionText='Registries' OptionIcon={<FiGift />} />
        </div>
        <hr className='horizontal'></hr>
        <div className='item'>
          <SidebarItem
            optionText='Departments'
            OptionIcon={<IoGridOutline />}
          />
          <SidebarItem
            optionText='Services'
            OptionIcon={<HiOutlineViewGrid />}
          />
        </div>
        <hr className='horizontal'></hr>
      </div>
    </div>
  )
}

export default Sidebar
