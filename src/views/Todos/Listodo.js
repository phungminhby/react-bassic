import React from "react";
import Addtodo from "./Addtodo";
import { toast } from 'react-toastify';

class ListTodo extends React.Component{
    
        state = {
            listTodo : [
                {id : 1, title : 'Fix Bugs'},
                {id : 2, title : 'Do homework'}
            ],
        editTodo: {}   // todo đang được sửa
        
    }

    addNewTodo = (todo) =>{
  
            this.setState({
                listTodo : [...this.state.listTodo, todo]
            })
            toast.success("Wow so easy!");
        }

    handleDelete = (todo)=>{
        let curentTodo = this.state.listTodo;
        curentTodo = curentTodo.filter(item => item.id !== todo.id)
        this.setState({
            listTodo : curentTodo
        })
        toast.success("Deleted!");
    }

    handleEdit = (todo)=>{
        this.setState({
            editTodo : todo
        })
        console.log('>>>Check data', todo)
    }
        handleSave = (todo)=>{
            let {listTodo, editTodo} = this.state;

            let newList = listTodo.map(item =>{
                if(item.id === editTodo.id)
                    return editTodo;
                return item;
            })
        this.setState({
            listTodo : newList,
            editTodo: {} // clear de render lại bình thường
        })

        toast.success('Updated');
        
    }



    render(){

        let {listTodo, editTodo} = this.state
        
        return(
            <>
                <Addtodo
                addNewTodo = {this.addNewTodo}
                />

                <div className="viewContent"> 

                    {listTodo && listTodo.length > 0 &&
                    listTodo.map((item, index) => {
                        let isEditing = editTodo.id === item.id;
                        return (
                            <div className="todoContent" key={item.id}>
                                {  // nếu đang sửa hiện ô input nếu không render dữ liệu bình thường
                                    isEditing ? (
                                        <span>
                                        {index + 1} - 
                                        <input
                                        value = {editTodo.title}
                                        onChange={(e)=> this.setState({
                                            editTodo :{
                                                ...editTodo, title: e.target.value
                                            }
                                        })}
                                        />
                                        </span>
                                    )
                                    :
                                    (
                                        <span> {index + 1} - {item.title} </span>
                                    )
                                }
                                
                                {  // nếu đang sửa hiện nút save ngược lại hiện edit
                                    isEditing ? (
                                        <button className="editBtn"
                                        onClick={()=>this.handleSave(item)}
                                        >
                                        Save
                                        </button> 
                                    )
                                    :
                                    (
                                    <button className="editBtn"
                                    onClick={()=>this.handleEdit(item)}
                                    >Edit</button> 
                                    )
                                }
                                
                                <button className="DLTBtn"
                                onClick={()=>this.handleDelete(item)}
                                >Delete</button>
                            </div>
                        )
                    })
                    }
                </div>
            </>
        )
    }
}

export default ListTodo;