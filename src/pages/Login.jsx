import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()

  function handleGuestLogin() {
    login()
    navigate('/checkout')
  }

  return (
    <div className="login-page">
      <div className="login-box">
        <h2>Login</h2>
        <p>You need to login to access checkout.</p>
        <button onClick={handleGuestLogin}>Login as Guest</button>
      </div>
    </div>
  )
}