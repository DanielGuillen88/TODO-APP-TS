import { useState } from "react"
import { Todos } from "./assets/components/Todos"
import { type Todo as TodoType, type TodoId } from "./assets/components/types"

const mockTodos = [
  { id: '1', title: 'Inicializar proyecto con Vite', completed: true },
  { id: '2', title: 'Añadir linter para TypeScript + React', completed: true },
  { id: '3', title: 'Subir proyecto a GitHub', completed: true },
  { id: '4', title: 'Añadir estilos del TodoMVC', completed: true },
  { id: '5', title: 'Listar todos los TODOs', completed: true },
  { id: '6', title: 'Poder borrar un TODO', completed: true },
  { id: '7', title: 'Marcar TODO como completado', completed: true },
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

  const handleRemoveTodo = ( {id} : TodoId ) : void => {
    console.log('Remove todo', id)
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleteTodo = (
    { id, completed } : Pick<TodoType, 'id' | 'completed'>
  ) : void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          // completed: !completed
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">

      <h1>TODO MVC</h1>
      <Todos
      onToggleCompleteTodo = { handleCompleteTodo }
      onRemoveTodo = { handleRemoveTodo }
      todos = { todos }
      />
      
    </div>
  )
}

export default App