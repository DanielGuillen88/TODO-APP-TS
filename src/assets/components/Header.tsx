import { CreateTodo } from "./CreateTodo";
import type { TodoTitle } from "./types";
import { useEffect, useState } from "react";

interface HeaderProps {           
    onAddTodo: (title: TodoTitle) => void;
}

export const Header: React.FC<HeaderProps> = ({ onAddTodo }) => {
    // console.log('Header component rendered')

    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const isDarkMode = document.documentElement.classList.contains("dark-mode");
        setDarkMode(isDarkMode);
    }, []);

    const toggleDarkMode = () => {
        const html = document.documentElement;
        html.classList.toggle("dark-mode");
        setDarkMode(!darkMode);
      };
    return (
        <header className="header">
            
            <h1>
            TODO
                <img
                style={{ width: "60px", height: "auto", marginLeft: "10px" }}
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png"
                alt="TypeScript Logo"
                />
            
            <span className="dark-mode-toggle" onClick={toggleDarkMode} style={{ marginLeft: "10px", cursor: "pointer" }}>
            {darkMode ? "🌛" : "☀️"}
            </span>

            </h1>

            <CreateTodo
                addTodo={onAddTodo}
            />
            </header>
    );      
}