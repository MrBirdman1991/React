import React from "react";
import { Todo } from "../App";
import CheckIcon from "./icons/CheckIcon";
import TrashIcon from "./icons/TrashIcon";
import Button from "./shared/Button";


interface Props{
  todo: Todo,
}

export default function TodoItem(props: Props) {
  return (
    <li className={`max-w-xl  rounded-md mb-2 p-6 shadow-sm ${props.todo.todoStatus === "fulfilled" ? "bg-emerald-300" : "bg-slate-200"}`}>
      <h3 className="text-2xl font-bold text-slate-800">{props.todo.title}</h3>
      <small className="text-slate-400">{props.todo.date}</small>
      <p className="text-slate-600 my-4">
        {props.todo.content}
      </p>
      <div className="flex items-center">
        <Button status="primary" >Read More</Button>
        <Button status="delete">
          <TrashIcon/>
        </Button>
        <Button status="success">
          <CheckIcon/>
        </Button>
      </div>
    </li>
  );
}
