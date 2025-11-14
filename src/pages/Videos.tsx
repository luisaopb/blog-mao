import Navbar from '../components/Navbar'
import '../Home.css'

function Videos() {
  return (
    <div className="home">
      <Navbar />
      
      <h1 className="main-title">Videos</h1>
      
      <section className="content-block">
        <div className="text-content">
          <p>
            Esta es la página de Videos. Aquí puedes encontrar nuestros videos y contenido multimedia.
          </p>
        </div>
      </section>
    </div>
  )
}

export default Videos


