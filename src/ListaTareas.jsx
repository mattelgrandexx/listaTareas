import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemTarea from './ItemTarea';

const ListaTarea = ({propsArregloTareas, borrarTarea})=>{
return(
    <ListGroup>
        {
            propsArregloTareas.map((tarea, posicion)=><ItemTarea key={posicion} nombreTarea={tarea} borrarTarea={borrarTarea}></ItemTarea>)
        }
   
    </ListGroup>

);
};

export default ListaTarea