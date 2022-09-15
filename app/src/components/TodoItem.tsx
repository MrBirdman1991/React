import React from "react";
import CheckIcon from "./icons/CheckIcon";
import TrashIcon from "./icons/TrashIcon";
import Button from "./shared/Button";

export default function TodoItem() {
  return (
    <li className="max-w-xl bg-slate-200 rounded-md mb-2 p-6 shadow-sm">
      <h3 className="text-2xl font-bold text-slate-800">Title</h3>
      <small className="text-slate-400">Datum: 01.02.2022</small>
      <p className="text-slate-600 my-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
        blanditiis eaque dolor aperiam. Possimus at aut commodi ipsum nesciunt
        deserunt...
      </p>
      <div className="flex items-center">
        <Button status="primary" >Read More</Button>
        <Button status="delete">
          <TrashIcon/>
        </Button>
        <Button status="success">
          <CheckIcon/>
        </Button>
        <Button status="success">halllo</Button>
      </div>
    </li>
  );
}
