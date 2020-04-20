import React, { Component } from "react";
import Axios from "axios";
import * as UTILS from "../utils";

export default class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = { comments: [] };
    // comments arrive as props, from parent component
    console.log(this.props);
  }

  removeComment = (e) => {
    var commentid = e.target.getAttribute("data-id");
    Axios.delete(`${UTILS.comments_url}/${commentid}`).then((res) => {
      console.log(res.data);
      console.log("Deleted");
      this.refreshData();
    });
  };

  componentDidMount() {
    this.refreshData();
  }

  refreshData = () => {
    Axios.get(`${UTILS.comments_url}`).then(
      (res) => {
        this.setState({ comments: res.data });
      },
      (error) => {
        console.log("error = ", error);
      }
    );
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
