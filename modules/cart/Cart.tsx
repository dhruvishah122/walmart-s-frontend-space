import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '@/redux/store'
import Image from 'next/image'
import {removeFromCartListItem} from '@/redux/cartItemSlice'
import {cartDecrement} from '@/redux/cartListSlice'

const Cart = () => {
  const cartItems = useSelector((state: RootState) => state.cartItem.items)
  console.log('cartItems', cartItems)

  const dispatch = useDispatch()

  const handleRemoveClick = (id: number) => {
    dispatch(removeFromCartListItem(id))
    dispatch(cartDecrement())
  }
  return (
    <div className='cart_wrapper'>
      <h2>My CartList</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <div className='cart_item_wrapper'>
          {cartItems.map((item: any, index: any) => (
            <div className='cart_items' key={index}>
              <div className='cartImage'>
                <Image
                  src={item?.image}
                  alt='img'
                  width={100}
                  height={100}
                  className='img'
                />
              </div>
              <h4>{item?.title}</h4>
              <div className='rating'>
                <p>${item?.price}</p>
              </div>
              <button
                onClick={() => handleRemoveClick(item?.id)}
                className='cancel_btn'
              >
                Remove
              </button>
            </div>
          ))}
          <div className='total_price_wrapper'>
            <h3 className='total'>Total</h3>
            <h5 className='price'>$6743.00</h5>
          </div>
          <button className='checkout'>PROCEED TO CHECKOUT</button>
        </div>
      )}
    </div>
  )
}

export default Cart
