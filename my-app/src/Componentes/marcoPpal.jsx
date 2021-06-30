import React from 'react';
import { Route, Switch } from 'react-router';
import Catalogo from './catalogo';
import Inicio from './inicio';
import FormularioEditar from './formularioEditar';
import { useLocation } from "react-router";

const MarcoPpal = () => {
    
    const { search } = useLocation();
    const busqueda = new URLSearchParams(search)
    const log = busqueda.get("id");
    const productos = {
        aros: {
            nombre: "Set Aros", 
            precio: "$300",
            desc1: "fgfgff",
            desc2: "fgbfgbb"
        },
        mochila: {
            nombre: "mochila", 
            precio: "$300",
            desc1: "fgfgff",
            desc2: "fgbfgbb"
        }
    }

    return(
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <Switch>
            <Route path="/productos/index.html"> <Catalogo /> </Route>
            <Route path="/productos"> {(productos[log])? <FormularioEditar producto={productos[log]}/>:"no existe" }</Route>
            {/* <Route path="/productos/index.html"> <Catalogo /> </Route>
            <Route path="/productos/index.html"> <Catalogo /> </Route>
            <Route path="/productos/index.html"> <Catalogo /> </Route> */}
            <Route path="/"> <Inicio /> </Route>
        </Switch>
        </main>
    )
}


export default MarcoPpal