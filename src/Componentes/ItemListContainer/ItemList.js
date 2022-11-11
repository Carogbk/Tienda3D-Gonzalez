import React from 'react'
import Item from './Item'

const ItemList = ({ catalogo }) => {
    return (
        <div style={styles.container}>
            {catalogo.map((productos) =>
            <Item key={productos.id} productos={productos} />
            )}
        </div>
    )
}
const styles = {
    container:{
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }
  }

export default ItemList;