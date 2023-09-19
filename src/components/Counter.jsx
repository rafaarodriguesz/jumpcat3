import React from 'react'
import { useState, useRef } from 'react'
import cat1 from "../assets/cat1.png"
import cat2 from "../assets/cat2.png"
import cat3 from "../assets/cat3.png"
import cat4 from "../assets/cat4.png"
import cat5 from "../assets/cat5.png"

import cat1g from "../assets/cat1g.jpg"
import cat2g from "../assets/cat2g.jpg"
import cat3g from "../assets/cat3g.jpg"
import cat4g from "../assets/cat4g.jpg"
import cat5g from "../assets/cat5g.jpg"

const Counter = () => {

    // Gato normal

    let gato1 = <img className="imgCat" src={cat1} alt='gato1' />
    let gato2 = <img className="imgCat" src={cat2} alt='gato2' />
    let gato3 = <img className="imgCat" src={cat3} alt='gato3' />
    let gato4 = <img className="imgCat" src={cat4} alt='gato4' />
    let gato5 = <img className="imgCat" src={cat5} alt='gato5' />


    // Gato Frances

    let gato1g = <img className='imgCat' src={cat1g} alt='gato1g' />
    let gato2g = <img className='imgCat' src={cat2g} alt='gato2g' />
    let gato3g = <img className='imgCat' src={cat3g} alt='gato3g' />
    let gato4g = <img className='imgCat' src={cat4g} alt='gato4g' />
    let gato5g = <img className='imgCat' src={cat5g} alt='gato5g' />

    let [count, useCount] = useState(0)

    let [jump, setjump] = useState(0)

    let [img, setimg] = useState(0)

    let [french, setFrench] = useState(0)

    function frenchOn() {
        if (french == 0) {
            setFrench(french + 1)
        } else if (french == 1) {
            setFrench(french = 0)
        }
    }

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

    function jumpFrench() {
        if (img === 0) {
            return <p>{gato1g}</p>

        } else if (img === 1) {
            return <p>{gato2g}</p>
        } else if (img === 2) {
            return <p>{gato3g}</p>
        } else if (img === 3) {
            return <p>{gato4g}</p>
        } else if (img === 4) {
            return <p>{gato5g}</p>
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
            {french === 0 ? jumpImg() : jumpFrench()}
            <button className='main-button' onClick={moreOne}>PULAR</button>
            <button className='french-button' onClick={frenchOn}>Gato Francês</button>
        </div>
    )
}

export default Counter