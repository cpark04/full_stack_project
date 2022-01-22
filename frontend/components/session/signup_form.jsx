import React from "react";
import { Link } from "react-router-dom";

class SignupForm extends React.Component {
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
    let link;
    if (this.props.formType === 'login') {
      link = <Link to="/signup">Signup</Link>
    } else {
      link = <Link to="/login">Login</Link>
    }

    return <div>
      <form onSubmit={this.handleSubmit}> 
        <span>{this.props.formType}</span>
        <br />
        <label>Email:
          <input type="text" value={this.state.email} onChange={this.update('email')}/>
        </label>

        <label>Password:
          <input type="password" value={this.state.password} onChange={this.update('password')}/>
        </label>
        <input type="submit" value={this.props.formType}/>
        {link}
      </form>
      {this.renderErrors()}
    </div>
  }
}

export default SignupForm;