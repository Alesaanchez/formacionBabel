import React from 'react'

const Navegacion = () => {
    const enlaces = [
        {name: 'Inicio', link: '#'},
        {name: 'Acerca de', link: '#'},
        {name: 'Contacto', link: '#'},
    ]

    return (
      <div>
      <ul>
        {enlaces.map((item, index) => (
          <li key={index}>
            <a href={item.link}>{item.name}</a>
          </li>
        ))}
      </ul>
    </div>
    )




}
    


export default Navegacion;