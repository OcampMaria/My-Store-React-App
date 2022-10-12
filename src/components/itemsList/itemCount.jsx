import React from "react"
import { useState } from "react"


export const ItemCount = ({stock, addToCart}) => {

    const [counter, setCounter] = useState(0)
    const [add, setAdd] = useState(true)

    const handleAddition = () => {
        if(counter < stock){
            setCounter(counter + 1)
        }
    }

    const handleRest = () => {
        if (counter > 0 ) {
            setCounter(counter  - 1)
        }
    }

    const handleAdd = () => {
        setAdd(!add)
    
    }
    return (
        <div className="">
            <h2>Product Counter</h2>
            <hr/>

            <button onClick={handleRest} className="btn">-</button>
            <span className="">{counter}</span>
            <button onClick={handleAddition} className="btn">+</button>
            <hr></hr>

            <button 
                onClick={handleAdd} 
                className={add ? "btn" : "btn btn-info"}
            >
                { add ? "Agregar al carrito" : "Se agregó con éxito!" }
            </button>
        </div>
    )
}

