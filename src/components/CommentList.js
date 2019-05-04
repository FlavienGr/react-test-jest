import React, { Component } from "react";
import { connect } from "react-redux";
class CommentList extends Component {
  renderComments = () => {
    return this.props.comment.map(item => {
      return <li key={item}>{item}</li>;
    });
  };
  render() {
    if (!this.props.comment) return <h3>Loading...</h3>;
    return (
      <div>
        <h2>List:</h2>
        <ul>{this.renderComments()}</ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    comment: state.comment
  };
};
export default connect(
  mapStateToProps,
  null
)(CommentList);
