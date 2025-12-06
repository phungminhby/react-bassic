import React from "react";
import { toast } from 'react-toastify';

class Addtodo extends React.Component{

    state = {
        title : ''
    }

        handleTitle = (event) =>{
            
            this.setState({
                title: event.target.value
            })   
            // console.log(this.state)
        }
    
        handleAddBTN = () => {
            if(!this.state.title){ // check xem có rỗng input k
                toast.error("Mising tittle!");
                return

            }
            let todo = {
                id : Math.floor(Math.random()*1000 + 1),
                title : this.state.title
            }
            this.props.addNewTodo(todo);
            this.setState({
                title: ''
            })
        }    

    render(){

        let {title} = this.state;

        return(
        <div className="addContent">
            <input type="text" value={title}
            className="inputTodo"
            onChange={(event)=> this.handleTitle(event)}
            /> 
            <button className="AddBtn"
            onClick={(event)=>this.handleAddBTN(event)}
            > Add </button>
        </div>
        )
    }
    
}

export default Addtodo;