# TODO-APP-TS React + TypeScript + Vite

## 🇪🇸 English version
A simple and clean Todo List application built with **React** and **TypeScript**, inspired by the TodoMVC project. It supports adding, editing, filtering, and removing tasks, with a custom hook for logic separation.


## ✅ Features Implemented

- [x] Initialize project with **Vite**
- [x] Add linter for **TypeScript + React**
- [x] Upload project to **GitHub**
- [x] Style the app using **TodoMVC** CSS
- [x] Display all TODOs
- [x] Delete a TODO
- [x] Mark a TODO as completed
- [x] Filter TODOs by status (**All**, **Active**, **Completed**)
- [x] Show number of active TODOs
- [x] Clear all completed TODOs
- [x] Create a TODO using the input in the **Header**
- [x] Edit the text of a TODO by **double clicking**
- [x] Extract all logic into a custom hook (`useTodos.ts`)
- [x] Add animations using **AutoAnimate**

## 🎮 Tech Stack

- React
- TypeScript
- Vite
- CSS (TodoMVC)
- AutoAnimate

## 🏛️ Structure

src/
├── assets/
├── components/
├── hooks/
│   └── useTodos.ts
├── mocks/
│   └── todos.ts     
├── consts.ts        
├── App.tsx
├── main.tsx

## 🚀 Getting Started

bash
npm install
npm run dev

Open http://localhost:5173 to view the app in your browser.


## 🛠️ Upcoming Features that we will apply to the next project

- [ ] Use a **Reducer** to better manage the todos state
- [ ] Add **backend synchronization**
- [ ] Add persistent storage using **localStorage** or a **Database**
- [ ] Add user authentication (optional)
- [ ] Add unit tests and integration tests
- [ ] Improve accessibility and keyboard navigation