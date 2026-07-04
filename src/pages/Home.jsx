import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div className="home">
      <h1>Welcome to Rose Shop</h1>
      <p>Find the best products at the best prices.</p>
      <button onClick={() => navigate('/shop')}>Go to Shop</button>
    </div>
  )
}