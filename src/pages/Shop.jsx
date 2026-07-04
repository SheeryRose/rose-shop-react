import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Shop() {
  const [products, setProducts] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data => setProducts(data.products))
  }, [])

  return (
    <div className="shop-page">
      <h2>All Products</h2>
      <div className="product-grid">
        {products.map(p => (
          <div key={p.id} className="product-card" onClick={() => navigate(`/product/${p.id}`)}>
            <img src={p.thumbnail} alt={p.title} />
            <h3>{p.title}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  )
}