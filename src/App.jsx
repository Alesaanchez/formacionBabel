import './App.css'
import ListaDinamica from './componentes/ListaDinamica'
import CapturarEvento from './componentes/EjercicioEventos';
import Loader from './componentes/practicasClase/Loader';
import {useState} from 'react'
import RegistroFormulario from './componentes/practicasCasa/Formulario'
import ScrollComponent from './componentes/practicasClase/Scroll';
import Countdown from './componentes/practicasClase/Countdown';
/*
function App() {
  return (
    <div>
      <ListaDinamica />
    </div>
  )
}
*/
/*
function App () {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (element) => {
    element.preventDefault();
    setLoading (true);

    setTimeout (() => {
      setLoading (false)}, 2000)
    
  }


  return (
    <div>
      <h1>Formulario</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="Nombre Completo" />
        <button type="submit">Enviar</button>
      </form>
      <Loader active={loading} />
    </div>
  )
}
*/ 
/*
function App () {
  return (
    <div className="App">
      <h1>Formulario de registro</h1>
      <RegistroFormulario />
    </div>
  )
} 
*/
/*
function App () {
  return (
    <div className="App">
      <ScrollComponent />
    </div>
  )
}
*/
function App () {
  const handleCountdownFinish = () => {
    alert ("La cuenta atrás ha finalizado") // se realiza cuando finaliza 
  }
  return (
    <div className="App">
      <h1> Aplicación de cuenta atrás</h1>
      <Countdown onCountdownFinish={handleCountdownFinish} /> 
    </div>
  )
}

export default App;
