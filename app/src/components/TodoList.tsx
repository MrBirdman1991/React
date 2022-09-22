import React from 'react'
import TodoItem from './TodoItem'
import {Todo} from "../App"

interface Props{
  todos: Todo[],
}

export default function TodoList(props: Props) {
  return (
    <ul className='flex flex-col items-center'>
        {
          props.todos.map(todo => <TodoItem  todo={todo} key={todo.id}/>)
        }
    </ul>
  )
}
