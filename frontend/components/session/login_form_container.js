import { connect } from "react-redux";
import { login, removeErrors } from "../../actions/session_actions";
import LoginForm from './login_form'
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => {
  return {
    errors: state.errors.session,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    processForm: user => dispatch(login(user)),
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))