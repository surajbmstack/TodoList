import React,{useState} from 'react'
 
export const EditTodoForm = ({editTodo,task}) => {
  const [value,setValue]=useState(task.task)
  const handleSubmit=(e)=>{
    e.preventDefault(); //prevents page from reloading
    editTodo(value,task.id);
   
  }
  return (
    <form classsName="TodoForm" onSubmit={handleSubmit}>
        <input type='text' 
        className='todo-input' value={value} placeholder='Update Task' onChange={(e)=>{
        setValue(e.target.value);

        }}/>
        <button type='submit' className='todo-btn'> Update Task</button>
    </form>
  )
}
 