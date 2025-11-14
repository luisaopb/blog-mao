import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'
import '../Home.css'

function Opiniones() {
  return (
    <div className="home">
      <Navbar />
      
      <h1 className="main-title">Opiniones</h1>
      
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <Link to="/actividad1" style={{ fontSize: '1.2rem', textDecoration: 'none', color: 'inherit' }}>
          Foro Semana 1
        </Link>
      </div>
      
      <section className="content-block">
        <div className="text-content">
        </div>
      </section>
    </div>
  )
}

export default Opiniones


