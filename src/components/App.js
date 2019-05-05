import React, { Component } from "react";
import CommentBox from "./CommentBox";
import CommentList from "./CommentList";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { changeAuth } from "../redux/actions";
class App extends Component {
  renderButton = () => {
    if (!this.props.auth) {
      return (
        <button onClick={() => this.props.changeAuth(true)}>Sign In</button>
      );
    }
    return (
      <button onClick={() => this.props.changeAuth(false)}>Sign Out</button>
    );
  };
  renderHeader = () => {
    return (
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/post">Post a comment</Link>
        </li>
        <li>{this.renderButton()}</li>
      </ul>
    );
  };
  render() {
    return (
      <div>
        {this.renderHeader()}
        <Route path="/post" component={CommentBox} />
        <Route path="/" exact component={CommentList} />
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
const mapDispatchToProps = dispatch => {
  return {
    changeAuth: isLoggedIn => dispatch(changeAuth(isLoggedIn))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
