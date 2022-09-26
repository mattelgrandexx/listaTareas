import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTareas";

const FormularioTarea = () => {
  // traigo el arreglo y si esta vacio lo cargo vacio
  const tareasLocalStorage = JSON.parse(localStorage.getItem("listaTareasKey")) || [];
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTareas] = useState(tareasLocalStorage);

  // ciclo de vida del componente

  useEffect(()=>{
    console.log("prueba del ciclo de vida")
    // guardo en local storage el arreglo
    localStorage.setItem("listaTareasKey", JSON.stringify(arregloTarea))
  },[arregloTarea])


  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTareas([...arregloTarea, tarea]);
    setTarea("");
  };

  const borrarTarea= (nombre)=>{
     let arregloModificado = arregloTarea.filter((item)=>item !== nombre);
     setArregloTareas(arregloModificado);
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3 d-flex">
          {/* Form control es el input */}
          <Form.Control
            type="text"
            placeholder="Ingrese una tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="primary" type="submit">
            Enviar
          </Button>
        </Form.Group>
      </Form>
      <ListaTarea propsArregloTareas={arregloTarea} borrarTarea={borrarTarea}></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
