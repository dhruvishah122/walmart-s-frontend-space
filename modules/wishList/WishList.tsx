import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import Image from 'next/image'
import {FaStar} from 'react-icons/fa'
import {removeFromWishListItem} from '@/redux/wishListItemSlice'
import {decrement} from '@/redux/wishListSlice'

const WishList = () => {
  const wishlistItems = useSelector(
    (state: RootState) => state.wishListItem.items
  )
 
  const dispatch = useDispatch()

  const handleRemoveClick = (id: number) => {
    dispatch(removeFromWishListItem(id))
    dispatch(decrement())
  }
 
  return (
    <div className='wishList_wrapper'>
      <h2>My Wishlist</h2>
      {wishlistItems.length === 0 ? (
        <p>No items in wishlist.</p>
      ) : (
        <div className='wishlist_item_wrapper'>
          {wishlistItems.map((item: any, index: any) => (
            <div className='wishlist_items' key={index}>
              <div className='wishListImage'>
                <Image
                  src={item.image}
                  alt='img'
                  width={150}
                  height={150}
                  className='img'
                />
              </div>
              <h4>{item.title}</h4>
              <div className='rating'>
                <h3>
                  {item?.rating?.rate}
                  <span>
                    <FaStar />
                  </span>
                </h3>
                <p>${item.price}</p>
              </div>
              <button className='add_to_cart'>ADD TO CART</button>
              <button
                onClick={() => handleRemoveClick(item.id)}
                className='remove'
              >
                REMOVE
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default WishList
