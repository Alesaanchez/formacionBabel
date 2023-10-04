import {useState, useRef} from 'react'


function Countdown ({onCountdownFinish}) {
    const [count, setCount] =useState (5)
    const [running, setRunning] =useState(false)
    const intervaloRef =useRef ()

    const startCountdown = () => {
        setRunning(true)
        intervaloRef.current =setInterval (() => {
            setCount((prevCount) => { //actualizar estado count con su valor anterior
                if (prevCount == 1) { //cuando el estado es 1
                    clearInterval(intervaloRef.current) //se detiene el intervalo
                    setRunning(false) //cuenta atrás finalizada
                    onCountdownFinish() //función como prop a countdown
                    return 0
                } return prevCount - 1
            }) 
        }, 1000) //Se ejecuta cada 1000 milisegundos = 1 segundo

    }

    const resetCountdown = () => {
        setCount(5)
        setRunning(false)
        clearInterval(intervaloRef.current)
    }

    return (
        <div>
            <h2> Esta es una cuenta atrás de: {count} segundos </h2>
            {!running ? (
                <button onClick={startCountdown}> Iniciar cuenta atrás </button>
            ) : (<button onClick={resetCountdown}> Parar y reiniciar</button>)
            }
        </div>
    )
}

export default Countdown