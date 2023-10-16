import React from 'react'

function Producto ({ producto, agregarAlCarrito}) {

    
    const agregarProductoAlCarrito = () => {
        if (producto.stock > 0) {
            agregarAlCarrito(producto.id)
        }
    }

    return (
        <div className="producto">
            <img src={producto.imagen} alt ={producto.nombre}/>
            <h3> {producto.nombre} </h3>
            <p>{producto.descripcion}</p>
            <p>Precio: {producto.precio}</p>
            <p>Stock: {producto.stock}</p>

            <button onClick={agregarProductoAlCarrito} disabled={producto.stock=== 0 || producto.cantidad === producto.stock} >
                {producto.stock === 0 ? 'Sin stock actual' : 'Agregar al carrito'} 
             </button>                            
        </div>
    )
}

export default Producto 