import React from 'react'

const formularioEditar = ({producto, ...props}) => {
    return(
            <form class="row g-3">
                        <div class="col-md-4">
                        <ul>
                            <li>
                                <label for="validationDefault01" class="form-label">Nombre</label>
                                <input type="text" class="form-control" id="validationDefault01" value={producto.nombre} required/>
                            </li>
                            <li>
                                <label for="validationDefault01" class="form-label">Precio</label>
                                <input type="text" class="form-control" id="validationDefault02" value={producto.precio} required/>
                            </li>
                            <li>
                                <label for="validationDefault01" class="form-label">Descripción</label>
                                <input type="text" class="form-control" id="validationDefault01" value={producto.desc1} required/>
                                <input type="text" class="form-control" id="validationDefault02" value={producto.desc2} required/>
                            </li>
                            <li>
                                <label for="formFile" class="form-label">Imagen</label>
                            </li>
                            <div class="mb-3">
                                <input class="form-control" type="file" id="formFile"/>
                            </div>  
                            </ul>  
                        </div>
                    </form>
                
    )
}

export default formularioEditar 