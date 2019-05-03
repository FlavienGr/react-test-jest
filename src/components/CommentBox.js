import React, { Component } from "react";

export default class CommentBox extends Component {
  render() {
    return (
      <div>
        <form>
          <h4>Add a comment</h4>
          <textarea />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
      </div>
    );
  }
}
