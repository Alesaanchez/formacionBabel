import React from 'react'

const Carrito = ({carrito, vaciarCarrito, quitarDelCarrito}) => {
    const total = carrito.reduce((acc, item) => acc + item.cantidad * item.precio, 0) // acumulador para calcular el precio total del carrito

    return (
        <div className="carrito">
            <h2> Este es tu carrito de compras</h2>
            <ul>
                {carrito.map((item) => (
                <li key={item.id}>
                    <span> {item.nombre} - {item.precio} - Cantidad: {item.cantidad}</span>
                    <button onClick={() => quitarDelCarrito(item.id)}> Eliminar unidad</button>
                </li>
                ))}
            </ul>
            <p> Total en el carriti: {total} euros</p>
            <button onClick={vaciarCarrito}>Vaciar carrito</button>
        </div>
    )
}

export default Carrito