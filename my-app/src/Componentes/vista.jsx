import React from 'react'

const Vista = () => {
    return(
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            <div id="fondo" class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 class="h2">Set Aros</h1>
                <div class="btn-toolbar mb-2 mb-md-0">
                    <div class="btn-group me-2">
                    <a href="./index.html" class="btn btn-sm btn-outline-secondary">Volver</a>
                    <a href="../productos/editarAros.html" class="btn btn-sm btn-outline-secondary">Editar</a>
                    <button type="button" class="btn btn-sm btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Eliminar</button>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">¿Seguro desea eliminar el producto?</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-dark">Eliminar</button>
                    </div>
                    </div>
                </div>
            </div>
        
            <img src="../../image/aro.jpg" alt="" width="350" height="350"></img>
            <div>
                <ul>
                    <li>1 colgante corto</li>
                    <li>4 argollas con dijes</li>
                    <li>1 cuff</li>
                    <li>1 argolla simple</li>
                    <li>90% IRON+10% PLASTIC</li>
                </ul>
            </div>
        </main>
    )
}

export default Vista