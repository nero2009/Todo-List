import React, { Component } from 'react';

class ToogleCompleted extends Component {
    constructor(props){
        super(props)
        this.state={
            value:''
        }
    }
    handleChange = (e) =>{
        this.setState({value: e.target.value})
    }

    
    render() {
        const {value} = this.state
        return (
            <div>
               <form action="">
                   <input type="text" value={value} onChange={this.handleChange}/>
                   <input type="submit" onClick={(e)=>this.props.toogle(e,value)}/>
               </form> 
            </div>
        );
    }
}

export default ToogleCompleted;