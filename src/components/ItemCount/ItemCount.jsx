import React from 'react'
import { useState } from 'react'
const ItemCount = ({initial, stock}) => {
    const [count, setCount] = useState(1)
    const decrement = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    const increment = () => {
        if(count < stock){
            setCount(count + 1)
        }
    }
    const addToCart = () => {
        alert(`se agregaron ${count} items al carrito`)
    }
    return (
        <div>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
            <p>Cantidad: {count}</p>
            <button onClick={addToCart}>Añadir al carrito</button>
        </div>
    )
}

export default ItemCount