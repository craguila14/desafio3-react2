import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/Navbar"
import Home from "./views/Home"
import PokemonSelector from './views/PokemonSelector'
import PokemonProvider from './context/PokemonContext'
import PokemonDetails from './views/PokemonDetails'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="App">
    <PokemonProvider>
      <NavBar/>
        <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/pokemones" element={<PokemonSelector />} />
        <Route path="/pokemones/:pokemonName" element={<PokemonDetails />} />
        </Routes>
    </PokemonProvider>
    
    </div>
  )
}

export default App

