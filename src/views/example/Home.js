import React from "react";
import avata from "../../assets/images/avata.jpg"
import './Home.scss'
import { connect } from "react-redux";

class Home extends React.Component{

    render(){
        console.log("Props", this.props)
        return(
            <>
            <div>
                Hello World from hompage with minhdzvcl
            </div>
                
            <div className="avatar">
                <img src={avata} alt="Avatar" className="avatar-img"/>
            </div>

            </>
            
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        dataRedux: state.users
    }
}
export default connect(Home);