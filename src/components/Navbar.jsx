import { useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function Navbar() {
  const navigate = useNavigate()
  const { cart } = useCart()

  return (
    <nav className="navbar">
      <span className="nav-logo" onClick={() => navigate('/')}>Rose Shop</span>
      <div className="nav-links">
        <span onClick={() => navigate('/')}>Home</span>
        <span onClick={() => navigate('/shop')}>Shop</span>
        <span onClick={() => navigate('/login')}>Login</span>
        <span className="cart-icon" onClick={() => navigate('/cart')}>
          🛒
          {cart.length > 0 && <span className="cart-badge">{cart.length}</span>}
        </span>
      </div>
    </nav>
  )
}