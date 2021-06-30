import React from 'react'

const Formulario = () => {
    return (
        <form class="row g-3">
            <div class="col-md-4">
                <input type="text" class="form-control" id="validationDefault01" value="Nombre" required></input>
                <br></br>
                <input type="text" class="form-control" id="validationDefault02" value="Precio" required></input>
                <br></br>
                <input type="text" class="form-control" id="validationDefault01" value="Descripción 1"></input>
                <input type="text" class="form-control" id="validationDefault02" value="Descripción 2"></input>
                <input type="text" class="form-control" id="validationDefault01" value="Descripción 3"></input>
                <br></br>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Imagen</label>
                    <input class="form-control" type="file" id="formFile"></input>
                </div>   
            </div> 
        </form>
    )
}

export default Formulario