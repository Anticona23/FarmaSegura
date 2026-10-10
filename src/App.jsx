import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Inicio from "./pages/Inicio";
import Medicamentos from './pages/Medicamentos';
import Navbar from './components/Navbar';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/Medicamentos" element={<Medicamentos/>} />
          </Routes>
        
      </BrowserRouter>
    </>
  )
}

export default App
