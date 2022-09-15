import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList() {
  return (
    <ul className='flex flex-col items-center'>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
    </ul>
  )
}
