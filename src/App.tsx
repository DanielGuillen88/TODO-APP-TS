import { useState } from "react"
import { Todos } from "./assets/components/Todos"

const mockTodos = [
  { id: '1', 
    title: 'todo 1', 
    completed: false 
  },
  { id: '2', 
    title: 'todo 2', 
    completed: false 
  },
  { id: '3', 
    title: 'todo 3', 
    completed: false 
  }
]
const App: React.FC = () => {

  const [ todos ] = useState(mockTodos)

  return (
    <div className="todoapp">

      <h1>TODO MVC</h1>
      <Todos todos = { todos } />
      
    </div>
  )
}

export default App