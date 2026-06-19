import React from 'react'
import check from '../assets/check.png'
import dryCleanIcon from '../assets/dry-clean.png'
import deleteIcon from '../assets/delete.png'


const TodoItems = ({text, id, isCompleted, deleteTodo, toggle}) => {
  return (
    <div className = "flex items-center my-3 gap-2">
      
      <div onClick = {() => {toggle(id)}}className="flex flex-1 items-center cursor-pointer">
        <img className="w-8" src={isCompleted ? check : dryCleanIcon} alt="check" />
        <p className = {`text-slate-700 ml-4 text-[17px] decoration-slate-500
           ${isCompleted ? "line-through" : ""}`}>{text}</p>
      </div>

       <img onClick ={()=>{deleteTodo(id)}}src = {deleteIcon} alt = "delete"  className = 
        "w-4.5 cursor-pointer"/>

    </div>
  )
}

export default TodoItems
