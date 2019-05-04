import React, { Component } from "react";

export default class CommentBox extends Component {
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
