import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  return (
    <nav className="navbar">
      <div className="navbar-line"></div>
      <div className="navbar-content">
        <Link 
          to="/" 
          className={`navbar-link ${location.pathname === '/' ? 'active' : ''}`}
        >
          Inicio
        </Link>
        <Link 
          to="/opiniones" 
          className={`navbar-link ${location.pathname === '/opiniones' ? 'active' : ''}`}
        >
          Opiniones
        </Link>
        <Link 
          to="/videos" 
          className={`navbar-link ${location.pathname === '/videos' ? 'active' : ''}`}
        >
          Videos
        </Link>
      </div>
      <div className="navbar-line"></div>
    </nav>
  )
}

export default Navbar

