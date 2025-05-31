import { type TodoTitle } from "./types";
import { useState } from "react";

interface CreateTodoProps {
    addTodo: (title: TodoTitle) => void;
}
export const CreateTodo: React.FC<CreateTodoProps> = ({ addTodo }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        if (inputValue.trim() === '') return; // No agregar si está vacío
        addTodo( { title: inputValue } ); // Llamar a la función para agregar el todo
        setInputValue(''); // Limpiar el campo de entrada después de agregar
    }
    return (

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="new-todo"
                value={ inputValue}
                onChange={(event) => { setInputValue(event.target.value) }}
                placeholder="¿Que quieres añadir?"
                onBlur={() => {
                    setInputValue('');
                  }} // al salir del campo limpiar  
                autoFocus
            />
        </form>
    )
}