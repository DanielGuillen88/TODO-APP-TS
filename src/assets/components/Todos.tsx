import { Todo } from "./Todo"
import { type Todo as TodoType, type TodoId } from "./types"
import  { useState } from "react"

interface TodosProps {
    todos: TodoType[],
    // setCompleted: ( id: string, completed: boolean ) => void,
    setTitle: ( params: { id: string, title: string }) => void,
    onToggleCompleteTodo: ({ id, completed } : Pick<TodoType, 'id' | 'completed'>) => void 
    onRemoveTodo: ( {id} : TodoId ) => void
}

export const Todos: React.FC<TodosProps> = ({
    todos,
    // setCompleted,
    setTitle,
    onToggleCompleteTodo,
    onRemoveTodo
}) => {

    const [ isEditing, setIsEditing ] = useState('')

    return (

        <ul className="todo-list">
            {todos.map((todo) => (
                <li 
                    key={todo.id}
                    onDoubleClick={() => { setIsEditing(todo.id) }}
                    className={`
                        ${todo.completed ? 'completed' : ''}
                        ${isEditing === todo.id ? 'editing' : ''}
                    `}
                >    
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        // setCompleted={setCompleted}
                        setTitle={setTitle}
                        isEditing={isEditing}
                        setIsEditing={setIsEditing}
                        onToggleCompleteTodo={onToggleCompleteTodo}
                        onRemoveTodo={onRemoveTodo}
                    />
                </li>
            ))}
        </ul>
    )
}