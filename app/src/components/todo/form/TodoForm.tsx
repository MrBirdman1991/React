import React, {Dispatch, SetStateAction, useState} from 'react'
import Button from '../../shared/Button'

interface Props{
  onCancel: Dispatch<SetStateAction<boolean>>
}

const TodoForm = (props: Props) => {

  const [todo, setTodo] = useState({title: "", content: ""});

  async function submitFormHandler(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault()
    const response = await fetch("http://localhost:8080/api/v1/todos/create", {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })

    const data = await response.json();
    console.log(data);
  }


  return (
    <div className='flex justify-center align-middle h-full '>
      <form  onSubmit={(e) => submitFormHandler(e)} className="place-self-center bg-slate-800 shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full m-5">
        <div className='m-6'>
          <label className ='block text-white mb-2 text-lg font-semibold' htmlFor="heading">Heading:</label>
          <input value={todo.title} onChange={(e) => setTodo({...todo, title: e.target.value})} className='shadow py-2 px-3 appearance-none rounded text-gray-800 focus:outline-none focus:shadow-outline  w-full' type="text" id="heading"/>
        </div>
        <div className='m-6'>
          <label className='block text-white mb-2 text-lg font-semibold' htmlFor="message">Message:</label>
          <textarea value={todo.content} onChange={(e) => setTodo({...todo, content: e.target.value})} id="message" rows={3} className="resize-none shadow py-2 px-3 appearance-none rounded text-gray-800 focus:outline-none focus:shadow-outline w-full"></textarea>
        </div>
        <Button status='primary' type="submit">Submit</Button>
        <Button status='slate' type="button" onClick={() => {props.onCancel(false)}}>Close</Button>
      </form>
    </div>
  )
}

export default TodoForm