import React from "react";
import MyButton from "./UI/button/MyButton";

const ResItem = (props) => {
  return (
    <>
      <div className="card mt-2">
        <div className="card-header d-flex align-items-center justify-content-between">
          <p className="m-0">
            <b>Restaurant</b>: {props.post.resName}
          </p>
          <p className="m-0">{props.number}</p>
        </div>
        <div className="card-body">
          <p className="m-0"><b>Location</b>: {props.post.resLocation}</p>
        </div>
        <div className="card-footer">
          <MyButton
            onClick={() => props.remove(props.post)}
            className="btn w-100 btn-danger"
          >
            Delete
          </MyButton>
        </div>
      </div>
    </>
  );
};

export default ResItem;
