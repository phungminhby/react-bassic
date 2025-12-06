import React from "react";



class Addcomponent extends React.Component{
    state = {
        title : '',
        salary : ''
    }
    
    handleJobtitle = (event)=> {
        this.setState({
            title: event.target.value
        })
    }

    handlesalary = (event)=> {
        this.setState({
            salary: event.target.value
        })
    }

    handleButton = (event) =>{
        event.preventDefault()
        if(!this.state.title || !this.state.salary){
            alert('Bạn chưa nhập thông tin!')
            return;
        }
        this.props.addNewJob({
            id : Math.floor(Math.random()*1000 + 1),
            title : this.state.title,
            salary : this.state.salary
        })
        this.setState({
            title : '',
            salary : ''
        })
    }

    render(){
        
        return(
        <>
         <form action="/action_page.php">
                    <label htmlFor="title">Job's Name:</label><br/>
                    <input type="text"
                    value={this.state.title}
                    onChange={(event)=> this.handleJobtitle(event)}
                    /><br/>
                    <label htmlFor="salary">Salary:</label><br/>
                    <input type="text" 
                    value={this.state.salary}
                    onChange={(event)=> this.handlesalary(event)}
                    /><br/>
                    <input type="submit" 
                    value="Submit"
                    onClick={(event) => this.handleButton(event)}
                    />
                </form>
        </>
    )
    }
}
export default Addcomponent;