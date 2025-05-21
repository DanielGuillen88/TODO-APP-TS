import { useState } from "react"
import { Todos } from "./assets/components/Todos"

const mockTodos = [
  { id: '1', title: 'Inicializar proyecto con Vite', completed: true },
  { id: '2', title: 'Añadir linter para TypeScript + React', completed: true },
  { id: '3', title: 'Subir proyecto a GitHub', completed: true },
  { id: '4', title: 'Añadir estilos del TodoMVC', completed: true },
  { id: '5', title: 'Listar todos los TODOs', completed: true },
  { id: '6', title: 'Poder borrar un TODO', completed: false },
  { id: '7', title: 'Marcar TODO como completado', completed: false },
  { id: '8', title: 'Añadir forma de filtrar TODOs (Footer)', completed: false },
  { id: '9', title: 'Mostrar número de TODOs pendientes (Footer)', completed: false },
  { id: '10', title: 'Añadir forma de borrar todos los TODOs completados', completed: false },
  { id: '11', title: 'Crear Header con input (Header)', completed: false },
  { id: '12', title: 'Crear un TODO (Header)', completed: false },
  { id: '13', title: 'Poder editar el texto de un TODO (Doble click)', completed: false },
  { id: '14', title: 'Añadir animaciones con AutoAnimate', completed: false },
  { id: '15', title: 'Pasar a Reducer', completed: false },
  { id: '16', title: 'Sincronizar con el backend', completed: false }
];

const App: React.FC = () => {

  const [ todos, setTodos ] = useState(mockTodos)

  const handleRemoveTodo = (id: string) : void => {
    console.log('Remove todo', id)
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }


  return (
    <div className="todoapp">

      <h1>TODO MVC</h1>
      <Todos
      onRemoveTodo = { handleRemoveTodo }
      todos = { todos }
      />
      
    </div>
  )
}

export default App