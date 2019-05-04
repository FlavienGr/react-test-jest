import React, { Component } from "react";
import { connect } from "react-redux";
import { addComment } from "../redux/actions";
class CommentBox extends Component {
  state = {
    comment: ""
  };
  handleComment = e => {
    const comment = e.target.value;
    this.setState(() => ({
      comment
    }));
  };
  handleSubmit = e => {
    e.preventDefault();
    this.props.addComment(this.state.comment);
    this.setState(() => ({
      comment: ""
    }));
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a comment</h4>
          <textarea onChange={this.handleComment} value={this.state.comment} />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    addComment: comment => dispatch(addComment(comment))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CommentBox);
