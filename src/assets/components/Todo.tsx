import { type Todo as TodoType, type TodoId } from "./types"

interface TodoProps extends TodoType{
    onToggleCompleteTodo: ({ id, completed } : Pick<TodoType, 'id' | 'completed'>) => void 
    onRemoveTodo: ( {id} : TodoId ) => void
}

export const Todo: React.FC<TodoProps> = ({ id, title, completed, onToggleCompleteTodo, onRemoveTodo }) => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                // onChange={() => {
                //     onToggleCompleteTodo({ id, completed: !completed })
                //     console.log('Toggle complete todo', id, completed)
                // }}
                onChange={(event) => {
                    onToggleCompleteTodo( { id, completed: event.target.checked })
    
                    console.log('Toggle complete todo', id, event.target.checked)
                }}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                    onRemoveTodo({ id })
                    console.log('Remove todo', id)
                }}
            />
        </div>
    )
}