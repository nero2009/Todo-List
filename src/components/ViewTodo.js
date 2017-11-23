import React from 'react';

const ViewTodo = (props) => {
    var failed = '()';
    var success = '(x)'
    return (
        <div>
            <ul>
            {props.todoList.map((todo)=> <div><li style={{display:'inline-block'}} key={todo.task}>{todo.task}{(todo.completed) ? success:failed}</li><button style={{display:'inline-block'}} >Delete</button></div> )}
            </ul>
            
        </div>
    );
};

export default ViewTodo;