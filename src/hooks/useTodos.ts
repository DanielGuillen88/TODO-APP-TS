import { useState } from "react"
import { TODO_FILTERS } from "../consts"
import { mockTodos } from "../mocks/todos"
import { type ListOfTodos, type Todo as TodoType, type FilterValue, type TodoTitle, type TodoId } from "../components/types"

export const useTodos = (): {
    
    activeCount: number,
    completedCount: number,
    todos: ListOfTodos,
    // filterSelected: FilterValue | undefined,
    filterSelected: FilterValue,
    handleAddTodo: (title: TodoTitle ) => void,
    handleRemoveTodo: (id: TodoId ) => void,
    handleCompleteTodo: (params: { id: string, completed: boolean }) => void,
    handleUpdateTodoTitle: (params: { id: string, title: string }) => void,
    handleFilterChange: (filter: FilterValue) => void
    handleClearAllCompleted: () => void
} => {

    const [ todos, setTodos ] = useState(mockTodos)
    const [ filterSelected, setFilterSelected ] = useState<FilterValue>(TODO_FILTERS.ALL)
    
    // añadir
    const handleAddTodo = ({title}: TodoTitle): void => {
    // const handleAddTodo = (title: TodoTitle): void => {
      const newTodo: TodoType = {
        title,
        id: crypto.randomUUID(),
        completed: false
      };
       const newTodos = [...todos, newTodo];
      setTodos(newTodos);
      console.log('New todo added:', newTodo);
    };
    //borrar
    const handleRemoveTodo = ( {id} : TodoId ) : void => {
    // const handleRemoveTodo = (id: TodoId): void => {
      console.log('Remove todo', id)
      const newTodos = todos.filter(todo => todo.id !== id)
      setTodos(newTodos)
    }
    // completar
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
        // return true
      })
      setTodos(newTodos)
    }
    // actualizar título
    const handleUpdateTodoTitle = ({ id, title }: { id: string, title: string }) : void => {
      const newTodos = todos.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            title
          }
        }
        return todo
      })
      setTodos(newTodos)
    }
    // cambiar filtro
    const handleFilterChange = ( filter: FilterValue ) : void => {
      // console.log('Filter changed to', filter)
      setFilterSelected(filter)
    }

    // filtrar todos
    const filteredTodos = todos.filter(todo => {
        if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
        if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
        return todo
      })

    // limpiar todos los completados
    const handleClearAllCompleted = () : void => {
                const newTodos = todos.filter(todo => !todo.completed)
                setTodos(newTodos)
            }
    // contar activos y completados
    const activeCount = todos.filter(todo => !todo.completed).length
    const completedCount = todos.length - activeCount
    
    return {
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
    }
};