import React, { useState } from 'react';

function RegistroFormulario() {
  const [datosFormulario, setDatosFormulario] = useState({
    nombre: '',
    correo: '',
    password: '',
    confirmPassword: '',
  });
  const [errores, setErrores] = useState({});
  const [alertMessage, setAlertMessage] = useState('');

  const handleChange = (element) => {
    const { name, value } = element.target;
    setDatosFormulario({ ...datosFormulario, [name]: value });
  };

  const validarFormulario = () => {
    const nuevosErrores = {};

    if (datosFormulario.nombre.length < 3) {
      nuevosErrores.nombre = 'El nombre de usuario debe tener al menos 3 caracteres.';
    }
   else  if (!correoValido(datosFormulario.correo)) {
      nuevosErrores.correo = 'El correo electrónico no es válido.';
    }
    else if (datosFormulario.password.length < 6) {
      nuevosErrores.password = 'La contraseña debe tener al menos 6 caracteres.';
    }
   else if (datosFormulario.password !== datosFormulario.confirmPassword) {
      nuevosErrores.confirmPassword = 'Las contraseñas no coinciden.';
    }
   else if (!datosFormulario.nombre || !datosFormulario.correo || !datosFormulario.password || !datosFormulario.confirmPassword) {
        window.alert ("Por favor, rellene todos los campos")
        
      }
    

    return nuevosErrores;
  };

  const handleSubmit = (element) => {
    element.preventDefault();

    const nuevosErrores = validarFormulario();

    if (Object.keys(nuevosErrores).length === 0) {
      // Muestra una alerta de registro completado
      window.alert('Registro completado :) ');
      setDatosFormulario({
        nombre: '',
        correo: '',
        password: '',
        confirmPassword: '',
      });
    } else {
      setErrores(nuevosErrores);
    }
  };

  const correoValido = (correo) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="nombre">Nombre de usuario:   </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={datosFormulario.nombre}
            onChange={handleChange}
          />
          {errores.nombre && <p>{errores.nombre}</p>}
        </div>
        <div>
          <label htmlFor="correo">Correo electrónico:    </label>
          <input
            type="email"
            id="correo"
            name="correo"
            value={datosFormulario.correo}
            onChange={handleChange}
          />
          {errores.correo && <p>{errores.correo}</p>}
        </div>
        <div>
          <label htmlFor="password">Contraseña:   </label>
          <input
            type="password"
            id="password"
            name="password"
            value={datosFormulario.password}
            onChange={handleChange}
          />
          {errores.password && <p>{errores.password}</p>}
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirmación de contraseña:   </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={datosFormulario.confirmPassword}
            onChange={handleChange}
          />
          {errores.confirmPassword && <p>{errores.confirmPassword}</p>}
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}

export default RegistroFormulario;
