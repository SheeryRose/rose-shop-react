import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useCart } from '../context/CartContext'

export default function ProductDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id])

  if (!product) return <p className="loading">Loading...</p>

  function handleAddToCart() {
    addToCart(product)
    setAdded(true)
  }

  return (
    <div className="product-detail">
      <button onClick={() => navigate('/shop')}>← Back to Shop</button>
      <div className="detail-content">
        <img src={product.thumbnail} alt={product.title} />
        <div className="detail-info">
          <h2>{product.title}</h2>
          <p className="detail-price">${product.price}</p>
          <p className="detail-desc">{product.description}</p>
          <p><strong>Brand:</strong> {product.brand}</p>
          <p><strong>Category:</strong> {product.category}</p>
          <p><strong>Rating:</strong> {product.rating} ⭐</p>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            {added ? 'Added to Cart ✓' : 'Add to Cart'}
          </button>
        </div>
      </div>
    </div>
  )
}