import React from 'react'
import Item from './Item'

const ItemList = ({ catalogo }) => {
    return (
        <div>
            {catalogo.map((productos) =>
            <Item key={productos.id} productos={productos} />
            )}
        </div>
    )
}
export default ItemList;