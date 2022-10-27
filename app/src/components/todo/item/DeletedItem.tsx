import React from "react";
import { Todo } from "../../../App";
import Button from "../../shared/Button";

interface Props {
  todo: Todo;
}

export default function DeleteItem(props: Props) {

  return (
    <li
      className="max-w-xl  rounded-md mb-2 p-6 shadow-sm bg-red-500"
    >
      <h3 className={`text-2xl font-bold text-white`}>
        {props.todo.title}
      </h3>
      <small className="text-white">{props.todo.date}</small>
      <p className=" my-4 text-white">{props.todo.content}</p>
      <div className="flex items-center">
        <Button status="primary">Read More</Button>
        <Button status="slate">Reset to Pending</Button>
      </div>
    </li>
  );
}
