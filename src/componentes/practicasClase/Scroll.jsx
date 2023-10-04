import {useState} from 'react'
import ScrollButton from './ScrollButton'


function ScrollComponent () {
    const [scrollY, setScrollY] = useState (0)
    const [mostrarBoton, setMostrarBoton] = useState(false)
    


   const handleScroll = () => {
    setScrollY(window.scrollY)
    setMostrarBoton (window.scrollY > 100 )
   }

    const estiloContenedor = {
        width: '100%',
        height: '100vh',
        overflowY: 'scroll'

    }

    const scrollArriba = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <div>
            <div className="contenido"  style={estiloContenedor} onScroll={handleScroll}>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p> 
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, similique cupiditate! Ipsum pariatur aperiam cumque sunt, culpa corrupti? 
                Ipsum soluta odio, veritatis deserunt quidem ut perferendis delectus expedita mollitia? Similique.</p>    
            </div>
            {mostrarBoton && <ScrollButton onClick={scrollArriba} />}
            <p> La posición vertical es: {scrollY}</p>

        </div>
    )
}

export default ScrollComponent