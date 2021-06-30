import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { useLocation } from "react-router";

const Encabezado = () => {
    return(
        <div class="justify-content-between  align-items-center text-center mx-auto d-block">
                <img src="../../image/TM.png"></img>
                <h1 class="h2">Catálogo</h1>
        </div>
    )
}

const Tabla = () => {

    const { search } = useLocation();
    const busqueda = new URLSearchParams(search)

    return(
        <table class="table">
            <thead class="thead-dark">
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody class="fw-bold">
                
                <tr>
                    <td><a href={`/productos?id=aros`} class="link-primary">Set aros</a></td>
                    <td>$500</td>
                </tr>
                <tr>
                    <td><a href={`/productos?id=mochila`} class="link-primary">Mochila Viajera</a></td>
                    <td>$3000</td>
                </tr>
                <tr>
                    <td><a href={`/productos?id=cuaderno`} class="link-primary">Cuaderno you are doing great</a></td>
                    <td>$300</td>
                </tr>
            </tbody>
        </table>
    )
}

const Catalogo = () => {

    return(
        <>
            <Encabezado />     
            <div class="display-7" class="table-responsive">
                <Tabla />
            </div>
            <div class="btn-toolbar mb-2 mb-md-0">
                <div class="btn-group me-2">
                   <a class="btn btn-sm btn-outline-secondary col-4 btn-group btn-group-justified" href="../productos/nuevoProducto.html" role="button">Nuevo Producto</a>
                </div>
            </div>
        </>  
    )
}

export default Catalogo