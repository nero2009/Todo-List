import React, { Component } from 'react';

class DeleteTodo extends Component {
    constructor(props){
        super(props)
        this.state ={
            value:''
        }
    }
    handleChange=(e)=>{
        this.setState({value: e.target.value})
    }
    render() {
        const {value} = this.state
        return (
            <div>
                <form >
                    <input type="number" value={this.state.value} onChange={this.handleChange}/>
                    <button onClick={this.props.delete(value)}>submit</button>
                </form>
            </div>
        );
    }
}

export default DeleteTodo;