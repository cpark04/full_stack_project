import React from "react";
import { Link } from "react-router-dom";

const Greeting = ({ currentUser, logout }) => {
  if (currentUser) {
    return <div>
      <span>Hello, {currentUser.username}</span>
      <button onClick={logout}>Logout</button>
      </div>
  } else {
    return <div>
      <Link to='/signup'>Signup</Link>
      <Link to='/login'>Login</Link>
    </div>
  }
}

export default Greeting;