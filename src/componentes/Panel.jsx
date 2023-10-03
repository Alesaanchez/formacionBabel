import React from 'react'
import {useState} from 'react'

function Panel ({title, children}) {
    const [expandido, setExpandido] = useState (false); 

    const togglePanel = () => {
        setExpandido(!expandido);
    }; 

    return (
        <div className="panel">
            <h2>{title}</h2>
            <button onClick={togglePanel}>
                {expandido ? 'Cerrar lista' : 'Abrir lista'}
            </button>
            {expandido && (<div className="panel-content"> 
                <ul>{children} </ul> </div>)}

        </div>

    )

}

export default Panel; 