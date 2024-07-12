import React from 'react'
import Link from 'next/link'

const footerLinks = [
  {id: 1, text: 'All Departments', href: '/all-departments'},
  {id: 2, text: 'Store Directory', href: '/store-directory'},
  {id: 3, text: 'Careers', href: '/careers'},
  {id: 4, text: 'Our Company', href: '/our-company'},
  {id: 5, text: 'Sell on Walmart.com', href: '/sell-on-walmart'},
  {id: 6, text: 'Help', href: '/help'},
  {id: 7, text: 'Product Recalls', href: '/product-recalls'},
  {id: 8, text: 'Accessibility', href: '/accessibility'},
  {id: 9, text: 'Tax Exempt Program', href: '/tax-exempt-program'},
  {id: 10, text: 'Get the Walmart App', href: '/get-app'},
  {id: 11, text: 'Sign-up for Email', href: '/sign-up-email'},
  {id: 12, text: 'Safety Data Sheet', href: '/safety-data-sheet'},
  {id: 13, text: 'Terms of Use', href: '/terms-of-use'},
  {id: 14, text: 'Privacy & Security', href: '/privacy-security'},
  {
    id: 15,
    text: 'California Supply Chain Act',
    href: '/california-supply-chain-act',
  },
  {id: 16, text: 'Your Privacy Choices', href: '/privacy-choices'},
  {id: 17, text: 'Notice at Collection', href: '/notice-at-collection'},
  {id: 18, text: 'NV Privacy Notice', href: '/nv-privacy-notice'},
  {id: 19, text: 'WA Privacy Notice', href: '/wa-privacy-notice'},
  {
    id: 20,
    text: 'Request My Personal Information',
    href: '/request-personal-info',
  },
  {id: 21, text: 'Brand Shop Directory', href: '/brand-shop-directory'},
  {id: 22, text: 'Pharmacy', href: '/pharmacy'},
  {id: 23, text: 'Walmart Business', href: '/walmart-business'},
  {id: 24, text: '#IYWYK', href: '/iywyk'},
  {id: 25, text: 'Delete Account', href: '/delete-account'},
]

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer_wrapper'>
          {footerLinks.map((item) => (
            <div key={item.id} className='links'>
              <Link href={item.href}>{item.text}</Link>
            </div>
          ))}
          <p>&copy; 2024 Walmart. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
