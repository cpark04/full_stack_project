import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  update(field) {
    return (e) => {
      return this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state)
  }

  renderErrors(){
    return(
      <ul>
        {this.props.errors.map((error,i) => {
          return <li key={i}>
            {error}
          </li>
        })}
      </ul>
    )
  }

  render() {
    
    return <div className='session-form'>
      <form onSubmit={this.handleSubmit}> 
        <p>Log in and let's get going</p>

        <input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')}/>

        <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')}/>

        <input type="Log in" value={this.props.formType} class='session-submit-button'/>

      </form>
      {this.renderErrors()}
    </div>
  }
}

export default LoginForm;