import Navbar from '../components/Navbar'
import '../Home.css'

function Opiniones() {
  return (
    <div className="home">
      <Navbar />
      
      <h1 className="main-title">Opiniones</h1>
      
      <section className="content-block">
        <div className="text-content">
          <p>
            Esta es la página de Opiniones. Aquí puedes encontrar nuestras opiniones y reflexiones sobre diversos temas.
          </p>
        </div>
      </section>
      
      <footer className="home-footer">
        <span>@reallygreatsite</span>
      </footer>
    </div>
  )
}

export default Opiniones

