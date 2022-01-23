import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: '',
      lname: '',
      email: '',
      password: '',
      errors: []
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
    this.props.processForm(this.state).fail(() => {
      this.setState({ errors: this.props.errors})
    })
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
            <p className='session-text'>Create your free account</p>

            <input type="text" placeholder="First name" value={this.state.fname} onChange={this.update('fname')} className='session-input'/>
            
            <input type="text" placeholder="Last name" value={this.state.lname} onChange={this.update('lname')} className='session-input'/>

            <input type="text" placeholder="Email" value={this.state.email} onChange={this.update('email')} className='session-input'/>

            <input type="password" placeholder="Password" value={this.state.password} onChange={this.update('password')} className='session-input'/>

            <input type="submit" value='Sign up' className='session-submit-button'/>
          </form>
          {this.renderErrors()}

          <div className='session-route-link'>
            <p>Already have an account?</p>
            <Link to='/login'>Log in</Link>
          </div>
        </div>
      </div>
    </div>
    
  }
}

export default SignupForm;