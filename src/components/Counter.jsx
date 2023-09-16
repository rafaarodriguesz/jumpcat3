import React from 'react'
import { useState, useRef } from 'react'
import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.png"
import cat3 from "../assets/cat3.png"
import cat4 from "../assets/cat4.png"
import cat5 from "../assets/cat5.png"

const Counter = () => {

    let gato1 = <img className="imgCat" src={cat1} alt='gato1' />
    let gato2 = <img className="imgCat" src={cat2} alt='gato2' />
    let gato3 = <img className="imgCat" src={cat3} alt='gato3' />
    let gato4 = <img className="imgCat" src={cat4} alt='gato4' />
    let gato5 = <img className="imgCat" src={cat5} alt='gato5' />

    let [count, useCount] = useState(0)

    let [jump, setjump] = useState(0)

    let [img, setimg] = useState(0)

    function moreOne() {
        useCount(count + 1)
        setimg(img + 1)
    }

    function jumpImg() {
        if (img === 0) {
            return <p>{gato1}</p>

        } else if (img === 1) {
            return <p>{gato2}</p>
        } else if (img === 2) {
            return <p>{gato3}</p>
        } else if (img === 3) {
            return <p>{gato4}</p>
        } else if (img === 4) {
            return <p>{gato5}</p>
        }
        else {
                setimg(img = 0)
                setjump(jump + 1)
        }
    }

    return (
        <div>
            <h1>Cliques</h1>
            <h1>{count}</h1>
            <h2>Pulos</h2>
            <h2>{jump}</h2>
            {jumpImg()}
            <button className='main-button' onClick={moreOne}>PULAR</button>
        </div>
    )
}

export default Counter