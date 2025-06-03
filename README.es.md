# TODO-APP-TS React + TypeScript + Vite

## 🇪🇸 Versión en Español - Crear un TodoMVC con TypeScript
Una aplicación de lista de tareas (Todo List) simple y ordenada construida con React y TypeScript, inspirada en el proyecto TodoMVC. Permite añadir, editar, filtrar y eliminar tareas, con un hook personalizado para separar la lógica.

## ✅ Funcionalidades Implementadas

- [x] Inicializar proyecto con Vite
- [x] Añadir linter para TypeScript + React
- [x] Subir proyecto a GitHub
- [x] Añadir estilos del TodoMVC
- [x] Listar todos los TODOs
- [x] Poder borrar un TODO
- [x] Marcar TODO como completado
- [x] Añadir forma de filtrar TODOs (Footer)
- [x] Mostrar número de TODOs pendientes (Footer)
- [x] Añadir forma de borrar todos los TODOs completados
- [x] Crear Header con input (Header)
- [x] Crear un TODO (Header)
- [x] Poder editar el texto de un TODO (Doble click)
- [x] Añadir animaciones con AutoAnimate
- [x] Añadir un modo oscuro funcional
- [x] Refactor en app, extraer lógica y hooks

## 🎮 Tecnologías utilizadas

- React
- TypeScript
- Vite
- CSS (TodoMVC)
- AutoAnimate

## 🏛️ Estructura del Proyecto

src/
├── assets/
├── components/
├── hooks/
│   └── useTodos.ts  // Hook con la lógica principal
├── mocks/
│   └── todos.ts     // Datos de prueba iniciales
├── consts.ts        // Filtros y constantes
├── App.tsx
├── main.tsx

## 🚀 Como iniciar

npm install
npm run dev

Abre http://localhost:5173 en tu navegador para ver la app.

## 🛠️ Próximas Funcionalidades que aplicaremos en el próximo proyecto

- Usar un Reducer para manejar mejor el estado
- Añadir sincronización con un backend
- Añadir almacenamiento persistente con localStorage o base de datos
- Añadir autenticación de usuarios (opcional)
- Añadir pruebas unitarias e integradas
- Mejorar accesibilidad y navegación con teclado