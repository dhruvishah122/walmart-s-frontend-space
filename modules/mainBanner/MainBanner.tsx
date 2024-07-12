import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const mainBannerArray = [
  {
    id: 1,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-6b49/k2-_f150c866-4a05-4a7a-ab0d-027239b712af.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70',
    link: 'Shop all',
    title: 'Rollbacks & more',
  },
  {
    id: 2,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-ce87/k2-_1c568c0d-0a15-4bc8-8230-53d494aad844.v1.jpg?odnHeight=447&odnWidth=794&odnBg=&odnDynImageQuality=70',
    link: 'Shop now',
    title: 'Easy pickup & delivery',
    heading: 'Lets party',
  },
  {
    id: 3,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-a1a2/k2-_b3534112-5af4-4d11-a611-37787a9a3535.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70',
    link: 'Shop now',
    title: 'More splash for your buck',
  },
  {
    id: 4,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-6415/k2-_d87f207c-35cd-4c7c-876a-988e68116561.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70',
    link: 'Shop now',
    title: 'Cookouts on get it today',
    priceText: 'Under',
    price: '$10',
  },
  {
    id: 5,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-5199/k2-_163871d7-2458-4563-8560-cc07d3825776.v1.jpg?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70',
    link: 'Shop mattress',
    title: 'Better rest, for way less',
    priceText: 'From',
    price: '$129',
  },
  {
    id: 6,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-50bc/k2-_0e82cee9-9f6a-4fb1-8482-ba76d789a39f.v1.jpg?odnHeight=388&odnWidth=385&odnBg=&odnDynImageQuality=70',
    link: 'Shop now',
    title: 'Fashion savings are so in',
    priceText: 'From',
    price: '$12',
  },
  {
    id: 7,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-9a0b/k2-_65458df9-385e-40e7-96ea-d343c736a363.v1.jpg?odnHeight=256&odnWidth=385&odnBg=&odnDynImageQuality=70',
    link: 'Shop now',
    title: 'Up to $500 off fridges & beyond',
  },
  {
    id: 8,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-981d/k2-_6e8d96f0-103f-4571-9601-1f70c3b33c46.v1.jpg?odnHeight=216&odnWidth=385&odnBg=&odnDynImageQuality=70',
    link: 'Shop now',
    title: 'Up to 30% off',
  },
  {
    id: 9,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-21d7/k2-_010ce435-9cfa-4871-98d9-b58993dee070.v1.jpg?odnHeight=216&odnWidth=794&odnBg=&odnDynImageQuality=70',
    link: 'Join walmart+',
    title: 'Walmart+ members save big with free delivery from stores',
  },
  {
    id: 10,
    image:
      'https://i5.walmartimages.com/dfw/4ff9c6c9-944b/k2-_1c3ae820-e797-4804-8bf0-6eb2c71c5f1d.v1.jpg?odnHeight=578&odnWidth=385&odnBg=&odnDynImageQuality=70',
    link: 'Shop now',
    title: 'Pedal, scoot & save big',
    priceText: 'From',
    price: '$198',
  },
]

const MainBanner = () => {
  return (
    <div className='mainBanneer_container'>
      <div className='mainBanner'>
        {mainBannerArray.map((item) => (
          <div key={item.id} className='mainBanner_wrapper'>
            <div className='img_container'>
              <Image
                src={item.image}
                alt='img'
                layout='fill'
                className='image'
              />
              <div className='mainBanner_text'>
                <h3>{item.title}</h3>
                <h1>{item.heading}</h1>
                <Link href='#'>{item.link}</Link>
                <div className='price_text'>
                  <div className='text'>{item.priceText}</div>
                  <div className='price'>{item.price}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MainBanner
