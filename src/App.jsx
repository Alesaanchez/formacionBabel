import './App.css'
import ListaDinamica from './componentes/ListaDinamica'
import CapturarEvento from './componentes/EjercicioEventos';
import Loader from './componentes/practicasClase/Loader';
import {useState} from 'react'
import RegistroFormulario from './componentes/practicasCasa/Formulario'
import ScrollComponent from './componentes/practicasClase/Scroll';

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

function App () {
  return (
    <div className="App">
      <ScrollComponent />
    </div>
  )
}

export default App;
