import {useState} from 'react'
import './EjercicioEventos.css'

function CapturarEvento () {
    const [isHovered, setIsHovered] = useState(false)
    const [isFocused, setIsFocused] = useState (false)

    const handleMouseEnter = () => {
        setIsHovered(true)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
    }
    const handleFocus = () => {
        setIsFocused(true)
    }

    const handleBlur = () => {
        setIsFocused(false)
    }

    return (
        <div
        className={`personalizar-contenido${isHovered ? ' hovered' : ''}${isFocused ? ' focused' : ''}`}

            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onFocus={handleFocus}
            onBlur={handleBlur}
            tabIndex={0}
        >
            Hover y Focus Ejemplo
        </div>

    )

}

export default CapturarEvento