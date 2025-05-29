import { CreateTodo } from "./CreateTodo";
import type { TodoTitle } from "./types";

interface Props {           
    onAddTodo: (title: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {

    return (
        <header className="header">
            <h1>TODO
            
            <img style={{ width: '60px', height: 'auto', marginLeft: '10px' }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
            alt="TypeScript Logo" />
            
            </h1>

            <CreateTodo
                addTodo={onAddTodo}
            />
            </header>
    );      
}