import React from "react";
import axios from "axios";
import "./ListUsers.scss"
import { withRouter } from "./withRouter";

class ListUsers extends React.Component{
    state = {
        ListUsers: []
    }
   async  componentDidMount(){
        let res = await axios('https://jsonplaceholder.typicode.com/users')
        this.setState({
            ListUsers: res && res.data ? res.data : []
        })
    }

    handleViewDetail = (user) => {
        this.props.navigate(`/users/${user.id}`);

    }

   
    render (){
        let {ListUsers } = this.state;
        return(
            <div className="list-user-container">
                <div className="title">
                    Fetch all user
                </div>
                    <div className="list-user-content">

                        {ListUsers && ListUsers.length > 0 &&
                            ListUsers.map((item, index) => {
                                return (
                                    <div className="child" key = {item.id} 
                                    onClick={()=> this.handleViewDetail(item)}
                                    >
                                        {item.id} - {item.name} - username: {item.username} - mail: {item.email}
                                        
                                    </div>
                                )
                            })
                        }

                    
                    </div>
            </div>
        )
    }
}

export default withRouter(ListUsers);