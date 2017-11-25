import React from 'react';

const ViewTodo = (props) => {
    var failed = '()';
    var success = '(x)'
    return (
        <div>
            <ul>
            {props.todoList.map((todo,index)=> <div><li style={{display:'inline-block'}} key={todo.task}>{todo.task}{(todo.completed) ? success:failed}</li>
            	<button id={index} style={{display:'inline-block'}} onClick={(e) =>props.deleteTodo(e,e.target.id)}>Delete</button></div> )}
            </ul>
            
        </div>
    );
};

export default ViewTodo;