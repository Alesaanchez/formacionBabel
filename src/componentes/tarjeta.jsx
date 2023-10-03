import React from 'react'

const Tarjeta = ({imagen, descripcion}) => {
    return (
        <div className="tarjeta">
            <img src= {imagen} alt="Imagen de la tarjeta" />
            <p> {descripcion}</p>
        </div>
    )
}

export default Tarjeta