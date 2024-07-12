import Link from 'next/link'
import React from 'react'

const PageNotFound = () => {
  return (
    <div className='pageNotFound'>
      <div className='pageNotFound_wrapper'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <Link href='/'>Go to homepage</Link>
      </div>
    </div>
  )
}

export default PageNotFound
