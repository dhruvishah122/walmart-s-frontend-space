import React from 'react'

const SkeletonProductPage = () => {
  return (
    <div className='skeletonProductPage'>
      <div className='skeletonProductPage_wrapper'>
        {Array.from({length: 20}).map((_, index) => (
          <div className='card is-loading' key={index}>
            <div className='content'></div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SkeletonProductPage


