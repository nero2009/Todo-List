import React from 'react';

const ViewTodo = (props) => {
    var failed = '()';
    var success = '(x)'
    return (
        <div>
            <ul>
            {props.todoList.map((todo)=> <li key={todo.task}>{todo.task}{(todo.completed) ? success:failed}</li> )}
            </ul>
            
        </div>
    );
};

export default ViewTodo;