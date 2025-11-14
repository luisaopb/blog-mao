import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Opiniones from './pages/Opiniones'
import Videos from './pages/Videos'
import Actividad1 from './pages/Actividad1'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/opiniones" element={<Opiniones />} />
        <Route path="/videos" element={<Videos />} />
        <Route path="/actividad1" element={<Actividad1 />} />
      </Routes>
    </Router>
  )
}

export default App
