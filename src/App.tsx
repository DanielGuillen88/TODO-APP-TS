import { Todos } from "./components/Todos"
import Footer from "./components/Footer";
import { Header } from "./components/Header";
import { useTodos } from "./hooks/useTodos";

const App: React.FC = () => {
  const {
    activeCount,
    completedCount,
    filterSelected,
    handleAddTodo,
    handleRemoveTodo,
    handleCompleteTodo,
    handleUpdateTodoTitle,
    handleFilterChange,
    handleClearAllCompleted,
    todos: filteredTodos
  } = useTodos()



  return (
    <div className="todoapp">

      <Header
        onAddTodo={handleAddTodo}
      />

      <Todos
      // setCompleted={ handleCompleteTodo }
      setTitle={ handleUpdateTodoTitle }
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