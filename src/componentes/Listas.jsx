import {useState} from 'react'

function Listas() {
    const [list, setList] = useState([ "Rick", "Morty", "Jerry", "Beth", "Summer", "Mr. Meeseeks", "Birdperson", "Squanchy"])

    function insertItem() {
        setList ((prevList) => {
            const copy = [...prevList]
            copy.push('New element ${copy.length}')
            
            return copy
        })

    }

    function filterList () {
        setList((prevList) => {

            const filteredList = prevList.filter((item) => item.includes('y'))
            
            return filteredList
            
        })
    }
    
    function removeThird() {
        setList((prevList) => {
            const copy = [...prevList]
            copy.splice (2,1)
            return copy
        })
    }


    return(
        <div>
            <button onClick={() => insertItem()}> Agregar elemento</button>
            <button onClick={() => filterList()}> Filtrar lista</button>
            <button onClick={() => removeThird()}> eliminar tercero</button>
        <ul>
            {list.map((item) => <li key={item}> {item}</li>)}
        </ul>
</div>
    )



}