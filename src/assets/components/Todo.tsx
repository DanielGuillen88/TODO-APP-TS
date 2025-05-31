import { useEffect, useRef, useState } from "react"
import { type TodoId, type Todo as TodoType } from "./types"

interface TodoProps extends TodoType{
    id: string,
    title: string,
    completed: boolean,
    // setCompleted: ( id: string, completed: boolean ) => void,
    setTitle: ( params: { id: string, title: string }) => void,
    isEditing: string,
    // setIsEditing: ( id: string ) => void,
    setIsEditing: ( completed: string ) => void,
    onToggleCompleteTodo: (params: { id: string, completed: boolean }) => void,
    onRemoveTodo: ( {id} : TodoId ) => void
}

export const Todo: React.FC<TodoProps> = ({ 
    id, 
    title,
    completed,
    // setCompleted,
    setTitle,
    isEditing,
    setIsEditing,
    onToggleCompleteTodo, 
    onRemoveTodo 
}) => {

    // console.log('Todo component rendered', id, title, completed)

    const [ editedTitle, setEditedTitle ] = useState(title)
    const inputEditTitle = useRef<HTMLInputElement>(null)

    useEffect(() => {
        inputEditTitle.current?.focus()
    }, [isEditing])   

    const handleKeyDown : React.KeyboardEventHandler<HTMLInputElement> = (event) => {
        if (event.key === 'Enter') {
            const trimmedTitle = editedTitle.trim()

            if (trimmedTitle === '') {
                alert('No deje el campo de título vacío')
                return
            }
        
            if (trimmedTitle !== title) {
                setTitle({ id, title: trimmedTitle }) // actualizamos el título del todo
            }
        
            setEditedTitle(trimmedTitle)
            setIsEditing('')
        }
        if (event.key === 'Escape') {
            setEditedTitle(title) // restauramos el título original
            setIsEditing('') // salimos del modo de edición
        }
    }         

    return (
        <>
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
                    // setCompleted( { id, completed: event.target.checked })
                    console.log('Marcado como completado', id, event.target.checked)
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

        <input
            className="edit"
            type="text"
            value={editedTitle}
            onChange={(event) => { setEditedTitle(event.target.value) }}
            onKeyDown={handleKeyDown}
            onBlur={() => {
                setEditedTitle(title)
                setIsEditing('')
              }} // al salir del campo, restauramos original  
            ref={inputEditTitle}
        />
        </>
    )
}