import React, { useState } from 'react';

function ListaDinamica() {
  const [items, setItems] = useState([
    { id: 1, nombre: 'Elemento 1' },
    { id: 2, nombre: 'Elemento 2' },
    { id: 3, nombre: 'Elemento 3' },
  ]);

  const eliminarElemento = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);
    setItems(updatedItems);
  };

  const agregarElemento = () => {
    const nuevoElemento = {
      id: Date.now() * Math.random(),
      nombre: "Anonimo",
    };
    setItems((prevItems) => [...prevItems, nuevoElemento]);
  };

  return (
    <div>
      <h2>Lista dinámica</h2>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.nombre}
            <button onClick={() => eliminarElemento(item.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <button onClick={agregarElemento}>Agregar Elemento</button>
    </div>
  );
}

export default ListaDinamica;
