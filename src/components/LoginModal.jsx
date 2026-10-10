
import { useState } from "react";

function LoginModal({ mostrar, onCerrar }) {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");

  if (!mostrar) return null;

  const manejarEnvio = (e) => {
    e.preventDefault();

    // Aquí conectaremos la autenticación con el backend.
    console.log({ correo, password });
    alert("Formulario enviado. Falta conectar el inicio de sesión con el backend.");
  };

  return (
    <div
      className="modal d-block"
      tabIndex="-1"
      role="dialog"
      aria-modal="true"
      aria-labelledby="loginTitulo"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onCerrar();
      }}
    >
      <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" style={{ maxWidth: '400px', width: '100%' }}>
        <div className="modal-content border-0 shadow rounded-4">
          <div className="modal-header border-0 px-4 pt-4 pb-0">
            <div>
              <h2
                className="modal-title fs-4 fw-bold"
                id="loginTitulo"
              >
                Iniciar sesión
              </h2>
              <p className="text-secondary small mb-0 mt-1">
                Ingresa tus datos para continuar.
              </p>
            </div>

            <button
              type="button"
              className="btn-close"
              onClick={onCerrar}
              aria-label="Cerrar ventana"
            />
          </div>

          <div className="modal-body px-4 pb-4">
            <div className="text-center mb-3">
              <div
                className="bg-success bg-opacity-10 rounded-circle d-inline-flex align-items-center justify-content-center"
                style={{ width: 80, height: 80 }}
              >
                <span style={{ fontSize: 70 }} role="img" aria-label="Farmacia">
                  👨‍⚕️
                </span>
              </div>
              <p className="text-success fw-semibold mt-1 mb-0">
                FarmaSegura
              </p>
            </div>

            <form onSubmit={manejarEnvio}>
              <div className="mb-3">
                <label htmlFor="loginCorreo" className="form-label fw-semibold">
                  Correo electrónico
                </label>

                <input
                  id="loginCorreo"
                  type="email"
                  className="form-control"
                  placeholder="nombre@correo.com"
                  value={correo}
                  onChange={(e) => setCorreo(e.target.value)}
                  autoComplete="username"
                  required
                />
              </div>

              <div className="mb-3">
                <label
                  htmlFor="loginPassword"
                  className="form-label fw-semibold"
                >
                  Contraseña
                </label>

                <input
                  id="loginPassword"
                  type="password"
                  className="form-control"
                  placeholder="Ingresa tu contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-success w-100" style={{ height: '40px' }}
              >
                Iniciar sesión
              </button>

              <button
                type="button"
                className="btn btn-outline-secondary w-100 mt-2" style={{ height: '35px' }}
                onClick={onCerrar}
              >
                Cancelar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginModal;
