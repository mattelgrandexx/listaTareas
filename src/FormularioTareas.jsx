import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListaTarea from "./ListaTareas";

const FormularioTarea = () => {
  const [tarea, setTarea] = useState("");
  const [arregloTarea, setArregloTareas] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setArregloTareas([...arregloTarea, tarea]);
    setTarea("");
  };

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
      <ListaTarea></ListaTarea>
    </div>
  );
};

export default FormularioTarea;
