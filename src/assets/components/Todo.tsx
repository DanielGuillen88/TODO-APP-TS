import { type Todo as TodoType } from "./types"

interface TodoProps extends TodoType{
    onRemoveTodo: (id: string) => void
}

export const Todo: React.FC<TodoProps> = ({ id, title, completed, onRemoveTodo }) => {
    return (
        <div className="view">
            <input
                className="toggle"
                type="checkbox"
                checked={completed}
                onChange={() => {}}
            />
            <label>{title}</label>
            <button
                className="destroy"
                onClick={() => {
                    onRemoveTodo(id)
                }}
            />
        </div>
    )
}