import './App.css'
import ListaDinamica from './componentes/ListaDinamica'
import CapturarEvento from './componentes/EjercicioEventos';

import Loader from './componentes/practicasClase/Loader';
import {useState} from 'react'

import RegistroFormulario from './componentes/practicasCasa/Formulario'
import ScrollComponent from './componentes/practicasClase/Scroll';

import Countdown from './componentes/practicasClase/Countdown';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './componentes/nuestraWeb/Home'
import About from './componentes/nuestraWeb/About';
import Ruta1 from './componentes/nuestraWeb/Ruta1';
import Ruta2 from './componentes/nuestraWeb/Ruta2';

import useSessionStorage from './componentes/useEffect/sesionStorage';


import ListaProductos from './components/ListaProductos'
import Carrito from './components/Carrito'

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
*/ /*
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
*/
/*
function App () {
  return (
      <div className="App">
       <Router>
        <nav> 
          <Link to ="/"> Home </Link>
          <Link to = "about"> About </Link>
        </nav>
        <Routes>
        <Route path="/" element={<Home />} >
            <Route path="home/route1" element={<Ruta1 />} />
            <Route path="home/route2" element={<Ruta2/>}/>
        </Route>
          <Route path="/about" element={<About />} />

        </Routes>
       </Router>
       </div>
  )
}
*/
/* function App() {
  const [productos, setProductos] =useState([
    {
      id: 1, 
      nombre: 'Producto 1', 
      descripcion: 'Descripcion del producto ',
      precio: 10.99,
      stock: 5,
      cantidad: 0,
      //imagen: imagenOrdenador
    },
    {
      id: 2, 
      nombre: 'Producto 2', 
      descripcion: 'Descripcion del producto ',
      precio: 10.99,
      stock: 0,
      cantidad: 0,
      //imagen: imagenCascos }
    }
  ])

  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (id) => {
    const productoExistente = carrito.find((item) => item.id === id)

    if (productoExistente) {
      const nuevoCarrito = carrito.map ((item) =>
        item.id === id ? {...item, cantidad: item.cantidad + 1} : item
      )
      setCarrito(nuevoCarrito)

      const nuevoStock = productos.map((producto) => 
        producto.id === id ? {...producto, stock: producto.stock -1} : producto)

        setProductos(nuevoStock)
    } else {

      const productoAgregado = productos.find((producto) => producto.id === id)
      setCarrito ([...carrito, {...productoAgregado, cantidad: 1}])

      const nuevoStock = productos.map ((producto) => 
        producto.id === id ? {...producto, stock: producto.stock -1} : producto)
        setProductos (nuevoStock)
        
    }
  }

  const quitarDelCarrito = (id) => {
    const productoEnCarrito = carrito.find((item) => item.id === id);
  
    if (productoEnCarrito) {
      if (productoEnCarrito.cantidad > 1) {
       
        const nuevoCarrito = carrito.map((item) =>
          item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item
        );
        setCarrito(nuevoCarrito);
  
      
        const nuevoStock = productos.map((producto) =>
          producto.id === id
            ? { ...producto, stock: producto.stock + 1 }
            : producto
        );
        setProductos(nuevoStock);
      } else {
        const nuevoCarrito = carrito.filter((item) => item.id !== id);
        setCarrito(nuevoCarrito);
  
        
        const productoQuitado = productos.find(
          (producto) => producto.id === id
        )
        const nuevoStock = productos.map((producto) =>
          producto.id === id
            ? { ...producto, stock: producto.stock + 1 }
            : producto
        )
        setProductos(nuevoStock);
      }
    }
  }

  const vaciarCarrito = () => {
    setCarrito ([])

    const productosRestablecidos = productos.map((producto) => ({
      ...producto, 
      stock: producto.stock + producto.cantidad, 
      cantidad: 0
    }))
    setProductos(productosRestablecidos)
  }

  return (
    <div className="App">
      <ListaProductos 
        productos={productos}
        agregarAlCarrito={agregarAlCarrito}
        />
      <Carrito
        carrito={carrito}
        vaciarCarrito={vaciarCarrito}
        quitarDelCarrito={quitarDelCarrito} 
      /> 
      
    </div>
  )

}

export default App
*/

function App () {
   const [count, setCount] = useSessionStorage('count', 0)

   const incrementar = () => {
    setCount (count +1)
   }

   return (
    <div>
      <h1> Contador en sessionStorage</h1>
      <p> Valor en sessionStorage: {count}</p>
      <button onClick={incrementar}> Incrementar contador </button>
    </div>
   )
}
  
export default App;
