import React from "react";
import {connect} from 'react-redux';
import auth from "./auth.js";
import "./Update.css";
class Update extends React.Component {
  state={
    name: "",
    password: "",
    email:""
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
  };

  render() {
const what=this.props.location.state.detail;
const id=what.id ;
    const values =this.props;
    const val=values.pros[id-1];
    return (
<div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>USER DETAILS</h1>
            <div className="firstname">
              <label htmlFor="username">UserName</label>
              <input
                name="name"
                defaultValue={val.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password</label>
              <input
                name="password"
                type="text"
                defaultValue={val.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="email">
              <label htmlFor="email"> Email</label>
              <input
                name="email"
                type="email"
                defaultValue={val.email}
                onChange={this.handleChange}
              />
            </div>
            <div className="update">
              <button type="submit" onSubmit={this.handleSubmit}>Update</button>
            </div>
            <div className="logout">
              <button  onClick={() => {
          auth.logout(() => {
          this.props.history.push("/");
          });
        }} >Logout</button>
            
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    pros:state.users
  }
  
}

export default connect(mapStateToProps) (Update);
