import React from 'react';

const Todo = ({todo, index, deleteTodo}) => {
	return (
		<>
		<div className="element">
			<h3>{todo.amount} - {todo.todo}</h3>
			<button className="btn-delete" onClick={() => deleteTodo(index)}>x</button>
		</div>
		</>
  )
}

export default Todo