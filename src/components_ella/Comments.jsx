import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";

export default class Comments extends Component {
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
      <div className="showing-comment-container-e">
        <p style={{ marginTop: "2rem" }} className="my-car-sign-red">
          Comments: {this.props.comments.length}
        </p>
        <div>
          {this.props.comments.map((item, i) => {
            return (
              <div className="showing-comment-e" key={i}>
                <div>
                  <p>{item.comment}</p>
                  {/* <p>model: {item.car_name}</p> */}
                </div>
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
      </div>
    );
  }
}
