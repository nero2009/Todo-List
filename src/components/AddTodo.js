import React, { Component } from 'react';
import ViewTodo from './ViewTodo.js';
//import DeleteTodo from './DeleteTodo';
import ToogleCompleted from './ToogleCompleted';

class AddTodo extends Component {
    constructor(props){
        super(props)
        this.state ={
            todo:{task:'',completed:false},todoList:[],completed:false,value:''
        }
        this.completed=0
    }

    handleChange = (e) =>{
        e.preventDefault();
        let todo = Object.assign({}, this.state.todo);
        todo.task = e.target.value;
        this.setState({todo})
    }

    submit= (e) =>{
        e.preventDefault();
        const {todoList,todo} = this.state
        todoList.push(todo);
        //alert(todoList)
        let todoClear = Object.assign({}, this.state.todo);
        todoClear.task = '';
        this.setState({todo:todoClear})
    }

    handleChange1=(e)=>{
        this.setState({value: e.target.value})
    }

   deleteTodo=(event,position)=>{
       
       event.preventDefault();
        this.state.todoList.splice(position,1);
        this.setState({
            value:''
        });
   }

   toggleCompleted =(event,position)=>{
       event.preventDefault();
       //debugger;
       const todo = this.state.todoList
       todo[position].completed = !todo[position].completed
       this.setState({
           todo
       })
   }

   toogleAll =(e) =>{
        e.preventDefault()
        
        let completed = this.completed
        const {todoList} = this.state
        let totalTodos = todoList.length
        //let todos = Object.assign([],todoList)
        /*Object.keys(todos).map(todo =>{
            if(todo.completed){
                completed++
            }
        })*/
       /* todos.map(todo =>{
            if(todo.completed){
                completed++
            }
        })*/
        for(let i=0; i < todoList.length; i++){
            if(todoList[i].completed){
                completed++
            }
        }
        for(let i=0; i<todoList.length; i++){
             if(completed === totalTodos){
                todoList[i].completed=false
                this.setState({
                    todoList
                })
                
            }
        }

        /*Object.keys(todos).map(todo =>{
             if(completed === totalTodos){
                todo.completed = false
                this.setState({todo})
            }
        })*/

        /*todos.map(todo =>{
            if(completed === totalTodos){
                todo.completed = false
                this.setState({todo})
            }
        })
*/
   }
   

    render() {
        const {value} = this.state;
        
        return (
            <div>
                <form >
                    <label >Add Todo</label>
                    <input value={this.state.todo.task} name="todo" onChange={this.handleChange} type="text" /> 
                    <input type="submit" onClick={this.submit} />
                </form>
                <form >
                    <label >Delete Todo</label>
                    <input type="number" value={this.state.value} onChange={this.handleChange1} />
                    <input type="submit" onClick={(e)=>this.deleteTodo(e,value)} />
                </form>
                <form >
                    <label >Toogle</label>
                    <ToogleCompleted toogle={this.toggleCompleted}/>
                </form>
                <form >
                    <label >Toogle All</label>
                    <input type="submit" onClick={(e)=>this.toogleAll(e)} />
                </form>
                <ViewTodo todoList={this.state.todoList} />
            </div>
        );
    }
}

export default AddTodo;