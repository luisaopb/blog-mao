import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Opiniones from './pages/Opiniones'
import Videos from './pages/Videos'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/opiniones" element={<Opiniones />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </Router>
  )
}

export default App
