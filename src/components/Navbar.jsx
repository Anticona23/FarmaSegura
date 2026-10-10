import { Link } from 'react-router-dom';
import { useState } from "react";
import LoginModal from "./LoginModal";

function Navbar() {

  const [mostrarLogin, setMostrarLogin] = useState(false);
  
  return (
    <nav className="navbar navbar-expand-lg bg-white border-bottom shadow-sm">
      <div className="container py-2">
        <Link className="navbar-brand fw-bold text-success" to="/">
          FarmaSegura
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#"
          aria-controls="menuNavbar"
          aria-expanded="false"
          aria-label="Abrir menú"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse"
          id="menuNavbar"
        >
          <ul className="navbar-nav ms-auto gap-lg-2">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/medicamentos">Medicamentos</Link>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#nosotros">Nosotros</a>
            </li>

            <li className="nav-item">
                <button
                  type="button"
                  className="btn btn-success ms-lg-2 mt-2 mt-lg-0"
                  onClick={() => setMostrarLogin(true)}
                >
                  Iniciar sesión
                </button>
              </li>
          </ul>
        </div>
      </div>
      
      <LoginModal
        mostrar={mostrarLogin}
        onCerrar={() => setMostrarLogin(false)}
      />
    </nav>
  );
}

export default Navbar;