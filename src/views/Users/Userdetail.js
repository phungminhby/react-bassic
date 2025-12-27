import React from "react";
import axios from "axios";
import { withRouter } from "./withRouter";

class Userdetail extends React.Component{

    state = {
        userDetail : {}
    }

    async componentDidMount()  {
        if (this.props.params){
            let id = this.props.params.id
            let res = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
            // console.log(res)

            this.setState({
                userDetail : res && res.data  ? res.data :{}
            })
        }
        
        
    }

     handleBackButton = () => {
        this.props.navigate('/user');
    }

    render(){

        let {userDetail} = this.state
        let isEmptyObj = Object.keys(userDetail).length === 0;
        
        return(
            <>
                <div>Hello world from detail user id {this.props.params.id}</div>

                {
                    isEmptyObj === false &&
                    <> 
                    <div>User id: {userDetail.id}</div>
                    <div>User name: {userDetail.name}</div>
                    <div>User email: {userDetail.email}</div>
                    <div>User username: {userDetail.username}</div>
                    <div>User website: {userDetail.website}</div>
                    <button type="button"
                                        onClick={()=>{this.handleBackButton()}}
                                        >
                                            Back
                                        </button>
                    </>
                }
               
            </>
            
        )
    }
}

export default withRouter(Userdetail);