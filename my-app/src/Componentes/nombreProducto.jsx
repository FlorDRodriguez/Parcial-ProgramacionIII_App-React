import React from 'react'

const NombreProducto = (props) => {
    return(
        <div>
            {props.valor && <h1>{props.valor}</h1>}
        </div>
    )
}

export default NombreProducto