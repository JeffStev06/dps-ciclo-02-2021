import React, { useState } from 'react';
import Todo from '../components/Todo';

const Form = () => {
  const [todo, setTodo] = useState({})
  const [todos, setTodos] = useState([])

  const handleChange = e => setTodo({
    ...todo,
    [e.target.name]: e.target.value
  })

  const handleClick = () => {
    if (Object.keys(todo).length === 0 || todo.todo.trim() === '') {
      alert('El campo no puede estar vacio')
      return
    }
    setTodos([...todos,todo])
    setTodo({todo:"",amount:0})
  }
  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index,1)
    setTodos(newTodos)
  }

  return (
    <>
    <form onSubmit={e=>e.preventDefault()}>
      <label>Agregar item</label>
      <div>
        <input 
          type="text" 
          name="todo" 
          placeholder="nombre"
          value={todo.todo} 
          onChange={handleChange} 
        />
        <input 
          type="number" 
          name="amount" 
          placeholder="cantidad"
          value={todo.amount} 
          onChange={handleChange} 
        />
      </div>
      <button onClick={handleClick}>Agregar</button>
    </form>
    <div className="list">
      {
        todos.map((value,index) => (
          <Todo todo={value} key={index} index={index} deleteTodo={deleteTodo} />
        ))
      }
    </div>
    </>
  )
}

export default Form