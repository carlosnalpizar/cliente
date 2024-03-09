
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RegProductos from './pages/RegProductos.jsx'
import RegPersona from './pages/RegPersona.jsx';
import Login from './pages/Login.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/RegistroProducto" element={<RegProductos/>}/>
      <Route path="/RegistroPersona" element={<RegPersona/>}/>
      <Route path="/Login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
