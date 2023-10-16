import {useState, useEffect} from 'react'

function useSessionStorage (key, initialValue) {
    const [value, setValue] =useState (() => {
        const storedValue = sessionStorage.getItem(key)
        // verificar si el valor no es nulo, si es nulo no hay valor almacenado 
        // convertir el valor a númerico para true, si es false se asignará el initial Value
        return storedValue !== null && !isNaN(Number(storedValue)) ?
        Number(storedValue) : initialValue
    })

    useEffect (() => {
        // .toString para cadena de texto y almacenarlo bien
        sessionStorage.setItem(key, value.toString())
    },[key, value])

    return [value, setValue]
    
}

export default useSessionStorage