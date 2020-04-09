import React from "react";
import "./styles.css";
import {connect} from 'react-redux';
import auth from "./auth.js";
const intialState={
  name: "",
  password: "",
};
class Login extends React.Component {
  state=intialState;
  validate = () => {
  const values =this.props;
  if (!this.state.name || !this.state.password) {
    alert("Fill all Fields");
  }
  else
  {
    const hasPassword = values.pro.find(item => item.password === this.state.password);
     const hasAdmins = values.pro.find(item => item.name === this.state.name);
if(!hasAdmins || !hasPassword)
{
  alert("Invalid User Details");
}
else if(hasAdmins.id === hasPassword.id){
alert("SuccessFully Logged in");
  auth.login(() => {
    this.props.history.push( {pathname:'/Update',
    state: { detail: hasAdmins }
  });
  });

}
  }
};
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.validate();
    this.setState(intialState);
  };
  

  render() {
    
    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <form onSubmit={this.handleSubmit}>
            <h1>LOGIN</h1>
            <div className="firstname">
              <label htmlFor="username">UserName</label>
              <input
                name="name"
                placeholder="Username"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div className="password">
              <label htmlFor="password"> Password</label>
              <input
                name="password"
                type="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </div>
            <div className="submit">
              <button type="submit"  >Submit</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state =>{
  return{
    pro:state.users
  }
}

export default connect(mapStateToProps) (Login);


