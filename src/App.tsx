import { useState } from "react"
import { Todos } from "./assets/components/Todos"
import { type Todo as TodoType, type TodoId, type FilterValue, type TodoTitle } from "./assets/components/types"
import { TODO_FILTERS } from "./consts";
import Footer from "./assets/components/Footer";
import { Header } from "./assets/components/Header";

const mockTodos = [
  { id: '1', title: 'Inicializar proyecto con Vite', completed: true },
  { id: '2', title: 'Añadir linter para TypeScript + React', completed: true },
  { id: '3', title: 'Subir proyecto a GitHub', completed: true },
  { id: '4', title: 'Añadir estilos del TodoMVC', completed: true },
  { id: '5', title: 'Listar todos los TODOs', completed: true },
  { id: '6', title: 'Poder borrar un TODO', completed: true },
  { id: '7', title: 'Marcar TODO como completado', completed: true },
  { id: '8', title: 'Añadir forma de filtrar TODOs (Footer)', completed: true },
  { id: '9', title: 'Mostrar número de TODOs pendientes (Footer)', completed: true },
  { id: '10', title: 'Añadir forma de borrar todos los TODOs completados', completed: true },
  { id: '11', title: 'Crear Header con input (Header)', completed: true },
  { id: '12', title: 'Crear un TODO (Header)', completed: true },
  { id: '13', title: 'Poder editar el texto de un TODO (Doble click)', completed: false },
  { id: '14', title: 'Añadir animaciones con AutoAnimate', completed: false },
  { id: '15', title: 'Pasar a Reducer', completed: false },
  { id: '16', title: 'Sincronizar con el backend', completed: false }
];

const App: React.FC = () => {

  const [ todos, setTodos ] = useState(mockTodos)
  const [ filterSelected, setFilterSelected ] = useState<FilterValue>(TODO_FILTERS.ALL)
  
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

  const handleFilterChange = ( filter: FilterValue ) : void => {
    console.log('Filter changed to', filter)
    setFilterSelected(filter)
  }

const handleClearAllCompleted = () : void => {
            const newTodos = todos.filter(todo => !todo.completed)
          setTodos(newTodos)
      }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const handleAddTodo = ({title}: TodoTitle): void => {
    const newTodo: TodoType = {
      title,
      id: crypto.randomUUID(),
      completed: false
    };
     const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    console.log('New todo added:', newTodo);
  };

  return (
    <div className="todoapp">

      <Header
        onAddTodo={handleAddTodo}
      />

      <Todos
      onToggleCompleteTodo = { handleCompleteTodo }
      onRemoveTodo = { handleRemoveTodo }
      todos = { filteredTodos }
      />

      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        onClearCompleted={handleClearAllCompleted}
        // onClearCompleted={() => {
        //   const newTodos = todos.filter(todo => !todo.completed)
        //   setTodos(newTodos)
        // }}
      />
      </div>
  )
}

export default App