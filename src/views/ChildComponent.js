import React from "react";

class ChildComponent extends React.Component{
        state = {showJob : false}
        handleShowHide = () =>{
            this.setState({
                showJob: !this.state.showJob
            })
        }

        handleOnclickDeletejob = (job) => {
            console.log(job)
            this.props.deleteaJob(job)
        }
    render(){
                let {arrJobs} = this.props
                let {showJob} = this.state
        return(
        <>
            {
            showJob === false ? <div><button onClick={()=>this.handleShowHide()}>Show</button></div>
            
             :

            <> <div className="job-lists">
                { arrJobs.map((item, index) => {
                    if(item.salary >= 10){
                        return(
                        <div key={item.id}>
                            {item.title} - {item.salary}$ 
                            <span style = {{color : "red"}}onClick={()=>this.handleOnclickDeletejob(item)}> X</span>
                        </div>
                            )
                        }
                    })
                }
                </div>
            <div><button onClick = {()=>this.handleShowHide()}>Hide</button></div>
            </>
            }
            
        </>
        )
    }
}

export default ChildComponent;