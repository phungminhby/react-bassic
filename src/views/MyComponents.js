import React from "react";
import ChildComponent from "./ChildComponent";
import Addcomponent from "./Addcomponent";

class MyComponent extends React.Component{
    

    state = {
        
        arrJobs : [
            {id : 'job1', title: 'developer', salary: '3000'},
            {id : 'job2', title: 'techer', salary: '2000'},
            {id : 'job3', title: 'tester', salary: '400'}
        ]     
}
    addNewJob = (job)=>{
        this.setState({
            arrJobs : [...this.state.arrJobs, job]
        })
    }

    deleteaJob = (job)=>{
        let currentJob = this.state.arrJobs;
        currentJob = currentJob.filter(item => item.id !== job.id)
        this.setState({
            arrJobs : currentJob
        })
    }

    render(){

        return(
            <>
                <Addcomponent
                addNewJob = {this.addNewJob}
                />
                
                <ChildComponent
                deleteaJob = {this.deleteaJob}
                arrJobs = {this.state.arrJobs}
                />
            </>
        )
    }
}

export default MyComponent;