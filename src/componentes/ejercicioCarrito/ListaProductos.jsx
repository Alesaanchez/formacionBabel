import {useState} from 'react'
import Producto from './Producto'


function ListaProductos ({productos, agregarAlCarrito}) {
    const [filtro, setFiltro] = useState('')
    const [mostrarConStock, setMostrarConStock ] = useState (false)

    const handleFiltroChange = (e) => {
        setFiltro (e.target.value)
    }

    const handleMostrarConStockChange = (e) => {
        setMostrarConStock (e.target.checked)
    }

    const productosFiltrados = productos.filter (
        (producto) => 
        producto.nombre.toLowerCase().includes(filtro.toLowerCase()) &&
        (!mostrarConStock || producto.stock > 0)
    )


    return (
        <div className ="lista-productos">
            <h2> Lista de productos </h2>
            <div>
                <input 
                    type="text"
                    placeholder="Buscar por nombre..."
                    value={filtro}
                    onChange={handleFiltroChange} 
                />
                <label> 
                    Mostrar solo productos en stock 
                    <input 
                        type="checkbox"
                        checked={mostrarConStock}
                        onChange={handleMostrarConStockChange}
                    />    
                </label>
            </div>
            {productosFiltrados.length === 0 ? (
                <p> No se encontraron productos </p>
            ) : (
                <div className="productos">
                    {productosFiltrados.map((producto) => (
                    <Producto 
                        key={producto.id}
                        producto={producto}
                        agregarAlCarrito={agregarAlCarrito}
                    />     
                    ))}
                </div>     
            )}
        </div>
    )


}

export default ListaProductos