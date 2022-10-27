import React from 'react'
import {Todo} from "../../App"

interface Props{
  todos: Todo[],
  comp: (todo: Todo) => JSX.Element
}

export default function TodoList(props: Props) {

  return (
    <ul className='flex flex-col items-center'>
        {
          props.todos.map(todo => props.comp(todo))
        }
    </ul>
  )
}
