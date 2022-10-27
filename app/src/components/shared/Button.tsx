import React from "react";

interface Props {
  status: "success" | "delete" | "primary" | "slate";
  children: JSX.Element | string;
  onClick?: (e: React.MouseEvent) => void;
  type?: "submit" | "button"| "reset"
}

export default function Button(props: Props) {
  let bgColor;
  let borderColor;
  switch (props.status) {
    case "success":
      bgColor = "bg-green-400";
      borderColor = "hover:border-green-400";
      break;
    case "delete":
      bgColor = "bg-red-600";
      borderColor = "hover:border-red-600";
      break;
    case "primary":
      bgColor = "bg-rose-500";
      borderColor = "hover:border-rose-500";
      break;
    case "slate":
      bgColor = "bg-slate-500";
      borderColor = "hover:border-slate-700";
      break;
    default:
      bgColor = "bg-rose-500";
      borderColor = "hover:border-rose-600";
  }
  return (
    <button
      type={props.type}
      className={`${bgColor} hover:bg-transparent hover:border-2 ${borderColor} hover:text-slate-600 text-white font-bold py-2 px-4 rounded mr-2`}
      onClick={(e) => props.onClick && props.onClick(e)}
    >
      {props.children}
    </button>
  );
}
