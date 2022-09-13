import React from "react";

import ResItem from "./ResItem";

const TableList = ({posts, resName, remove}) => {
  return (
    <>
      <h4 className="text-center">{resName}</h4>
      <table className="table table-striped">
        <tbody>
          {posts.map((post, index) => (
            <ResItem remove={remove} number={index + 1} post={post} key={post.id} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default TableList;
