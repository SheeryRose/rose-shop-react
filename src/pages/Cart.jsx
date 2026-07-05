import { useCart } from '../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function Cart() {
  const { cart, removeFromCart } = useCart()
  const navigate = useNavigate()

  const total = cart.reduce((sum, item) => sum + item.price, 0)

  if (cart.length === 0) {
    return (
      <div className="cart-page">
        <h2>Your Cart</h2>
        <p className="empty-cart">No items in cart yet.</p>
        <button onClick={() => navigate('/shop')}>Go to Shop</button>
      </div>
    )
  }

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.map((item, index) => (
        <div key={index} className="cart-item">
          <img src={item.thumbnail} alt={item.title} />
          <div className="cart-item-info">
            <p>{item.title}</p>
            <p className="cart-item-price">${item.price}</p>
          </div>
          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}
      <div className="cart-total">
        <strong>Total: ${total.toFixed(2)}</strong>
        <button onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
      </div>
    </div>
  )
}