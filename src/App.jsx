import "bootstrap/dist/css/bootstrap.min.css"
import Container from "react-bootstrap/Container"
import FormularioTareas from "./FormularioTareas"

function App() {
  return (
    <Container className="my-5 text-center">
<h1 className='display-2'>Lista de tareas</h1>
<hr />
<FormularioTareas></FormularioTareas>
    </Container>
  );
}

export default App;
