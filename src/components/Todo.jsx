import React, { useEffect } from 'react'
import plus from '../assets/plus.png'
import TodoItems from './TodoItems'


const Todo = () => {

  const [todoList, setTodoList] = React.useState([]);

const inputRef = React.useRef();

const add = () => {
  const inputText = inputRef.current.value.trim();

  if(inputText===""){
    return null;
  }


  const newTodo = {
    id: Date.now (),
    text: inputText,
    isCompleted: false
  }
  setTodoList((prev)=> [...prev, newTodo]);
  inputRef.current.value = ""; 
}

const deleteTodo = (id) => {
  setTodoList((prvTodos)=>{
    return prvTodos.filter((todo)=> todo.id !== id)
  })
}

const toggle = (id) => {
  setTodoList((prevTodos) => {
    return prevTodos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, isCompleted: !todo.isCompleted }
      }
      return todo;
    })
  })
}

useEffect(() => {
  localSyorage.setItem()
},[todoList])

  return (
    <div className="bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 
    min-h-[90vh] rounded-xl">

      {/*  --------- title --------- */}

      <div className='flex items-center mt-7 gap-2'>
        <img className='w-9' src={plus} alt="plus icon" />
        <h1 className="text-3xl font-semibold">To-do List</h1>
      </div>

      {/*  --------- input box --------- */}

      <div className='flex items-center mt-7 gap-2 bg-gray-300 rounded-full'>
        <input  ref = {inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2
         placeholder:text-slate-600" type="text" placeholder="Add your task" />

        <button  onClick = {add}className="bg-blue-500 border-none text-white text-lg font-medium
         cursor-pointer px-6 py-4 rounded-full hover:bg-blue-700">ADD +</button>
      </div>

       {/*  --------- todo list --------- */}

        <div>
          {todoList.map((item) => {
            return <TodoItems key={item.id} text={item.text} id={item.id} isCompleted={item.isCompleted}
            deleteTodo={deleteTodo} toggle={toggle}/>
          })}
          
          
          
        </div>

    </div>
  )
}

export default Todo
  