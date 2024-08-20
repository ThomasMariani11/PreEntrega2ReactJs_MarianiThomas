import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
export const product = ({product}) => {
    return (
            <div className='card-detail' key={product.id}>
                <img src={product.imagen} alt={product.titulo}/>
                <h2>$ {product.precio}</h2>
                <p className='card-title'>{product.titulo}</p>
                <p className='card-title'>Stock: {product.stock}</p>
                <p className='descripcion'>{product.descripcion}</p>
                <ItemCount initial={1} stock={product.stock}/>
            </div>
        
    )
}
export default product