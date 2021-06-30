import React from 'react';

const BarraLateral = () => {
    
    return(
            <div class="container-fluid">
                <div class="row">
                    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse">
                        <div class="position-sticky pt-3">
                            <ul class="nav flex-column">
                                <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">
                                    <span data-feather="home"></span>
                                    Inicio
                                </a>
                                </li>
                                <li class="nav-item">
                                <a class="nav-link" href="/productos/index.html">
                                    <span data-feather="shopping-cart"></span>
                                    Productos
                                </a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>          
    )
}

export default BarraLateral
