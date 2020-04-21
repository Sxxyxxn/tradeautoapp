import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";

export default class CommentDelete extends Component {
  removeComment = (e) => {
    var commentid = e.target.getAttribute("data-id");
    Axios.delete(`${UTILS.comments_url}/${commentid}`).then((res) => {
      console.log("Deleted");
      // call the parent
      this.props.refresh();
    });
  };
  render() {
    return (
      <div>
        {this.props.comments.map((item, i) => {
          return (
            <div>
              <button
                onClick={this.removeComment}
                data-id={item._id}
                className="delete-btn-small-e"
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  }
}
