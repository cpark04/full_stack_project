import React from "react";
import { Link } from "react-router-dom";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }
  
  update(field) {
    return (e) => {
      return this.setState({ [field]: e.currentTarget.value })
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state).fail(() => {
      this.setState({ errors: this.props.errors})
    })
  }

  handleDemo(e){
    e.preventDefault();
    this.props.processForm({email: "demo@gmail.com", password: "12341234"})
  }

  renderErrors(){
    return(
      <ul>
        {this.state.errors.map((error,i) => {
          return <li key={i}>
            {error}
          </li>
        })}
      </ul>
    )
  }

  render() {
    
    return <div className='background-div'>
      <div className='form-padding'>
        <div className='session-form'>
          <form onSubmit={this.handleSubmit} className='login-form'> 
            <p className='session-text'>Log in and let's get going</p>

            <input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} className='session-input'/>

            <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} className='session-input'/>

            <input type="submit" value='Log in' className='session-submit-button'/>
          </form>
          {this.renderErrors()}

          <div className='session-route-link'>
            <p>Don't have an account?</p>
            <Link to='/signup'>Sign up for free</Link>
          </div>

          <div className='demo-container'>
            <a href='' onClick={this.handleDemo}>Log in as Demo User</a>
          </div>
        </div>
      </div>
    </div>
    
  }
}

export default LoginForm;