import TodoList from "./components/TodoList";

export interface Todo{
  id: string
  title: string,
  content: string,
  date: string,
  todoStatus: "pending" | "fulfilled" | "deleted"
}


const TODOS: Todo[] = [
  {
    id: Math.random().toString(),
    title: "Javascript lernen",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.03.21",
    todoStatus: "pending"
  },
  {
    id: Math.random().toString(),
    title: "PHP lernen",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.05.21",
    todoStatus: "fulfilled"
  },
  {
    id: Math.random().toString(),
    title: "Kotlin lernen",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.05.23",
    todoStatus: "deleted"
  },
  {
    id: Math.random().toString(),
    title: "Node Js lernen",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.03.21",
    todoStatus: "pending"
  },
  {
    id: Math.random().toString(),
    title: "HTML lernen",
    content: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt deserunt...",
    date: "12.03.21",
    todoStatus: "fulfilled"
  }
]


function App() {
  const fulfilledTodos = TODOS.filter((todo) => {return todo.todoStatus === "fulfilled"});
  const deletedTodos = TODOS.filter((todo) => todo.todoStatus === "deleted");
  const pendingTodos = TODOS.filter((todo) => todo.todoStatus === "pending");

  return (
    <div className="container m-auto">
      <h1 className="text-6xl text-center text-gray-800">Todo APP</h1>

      <div>
        <h3 className="text-center text-3xl text-gray-700">Todo List</h3>
        <TodoList todos={pendingTodos}/>
      </div>

      <div>
        <h3 className="text-center text-3xl text-gray-700">Finished Todos</h3>
        <TodoList todos={fulfilledTodos}/>
      </div>

      <div>
        <h3 className="text-center text-3xl text-gray-700">Deleted Todos</h3>
        <TodoList todos={deletedTodos}/>
      </div>
    </div>
  );
}

export default App;
