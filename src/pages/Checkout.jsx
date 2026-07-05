import { useCart } from '../context/CartContext'

export default function Checkout() {
  const { cart } = useCart()
  const total = cart.reduce((sum, item) => sum + item.price, 0)

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <p>You are logged in as a Guest.</p>
      <div className="checkout-summary">
        <h3>Order Summary</h3>
        {cart.map((item, index) => (
          <div key={index} className="checkout-item">
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
        ))}
        <div className="checkout-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>
    </div>
  )
}