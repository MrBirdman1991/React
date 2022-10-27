import Button from "./components/shared/Button";
import TodoList from "./components/todo/TodoList";
import { useState } from "react";
import { Backdrop } from "./components/shared/Backdrop";
import SuccessItem from "./components/todo/item/SuccessItem";
import PendingItem from "./components/todo/item/PendingItem";
import DeleteItem from "./components/todo/item/DeletedItem";
import TodoForm from "./components/todo/form/TodoForm";

export interface Todo {
  id: string;
  title: string;
  content: string;
  date: string;
  todoStatus: "pending" | "fulfilled" | "deleted";
}

const TODOS: Todo[] = [
  {
    id: Math.random().toString(),
    title: "Javascript lernen",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.03.21",
    todoStatus: "pending",
  },
  {
    id: Math.random().toString(),
    title: "PHP lernen",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.05.21",
    todoStatus: "fulfilled",
  },
  {
    id: Math.random().toString(),
    title: "Kotlin lernen",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.05.23",
    todoStatus: "deleted",
  },
  {
    id: Math.random().toString(),
    title: "Node Js lernen",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.03.21",
    todoStatus: "pending",
  },
  {
    id: Math.random().toString(),
    title: "HTML lernen",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.03.21",
    todoStatus: "fulfilled",
  },
  {
    id: Math.random().toString(),
    title: "HTML lernen",
    content:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.03.21",
    todoStatus: "fulfilled",
  },
];

function App() {
  const [showForm, setShowForm] = useState(false);
  const fulfilledTodos = TODOS.filter((todo) => {
    return todo.todoStatus === "fulfilled";
  });
  const deletedTodos = TODOS.filter((todo) => todo.todoStatus === "deleted");
  const pendingTodos = TODOS.filter((todo) => todo.todoStatus === "pending");

  return (
    <div className="container m-auto">
      <h1 className="text-6xl text-center text-gray-800">Todo APP</h1>

      <div className="flex flex-col align-middle m-24 bg-slate-200 p-12 shadow-md">
        <h3 className="text-center text-3xl text-gray-700 mb-4">Formular</h3>
        <Button status="primary" onClick={(e) => setShowForm(true)}>
          Toggle Formular
        </Button>
        {showForm && (
          <Backdrop>
            <TodoForm onCancel={setShowForm}/>
          </Backdrop>
        )}
      </div>
      <div>
        <h3 className="text-center text-3xl text-gray-700">Todo List</h3>

        <ul className="flex flex-col items-center">
          {pendingTodos.map((todo) => (
            <PendingItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-center text-3xl text-gray-700">Finished Todos</h3>
        <ul className="flex flex-col items-center">
          {fulfilledTodos.map((todo) => (
            <SuccessItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>

      <div>
        <h3 className="text-center text-3xl text-gray-700">Deleted Todos</h3>
        <ul className="flex flex-col items-center">
          {deletedTodos.map((todo) => (
            <DeleteItem todo={todo} key={todo.id} />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
