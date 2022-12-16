import React, { useState, useMemo } from "react";
import PostForm from "./components/PostForm";
import TableList from "./components/TableList";
import "./App.css";

import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import Amplify from "aws-amplify";
import aws_exports from "./aws-exports";
Amplify.configure(aws_exports);

const App = () => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      resName: "Burger House",
      resLocation: "829 N. Warren St.Lake Villa, IL 60046",
    },
    {
      id: 2,
      resName: "Uzbekistan national meals",
      resLocation: "300 Pulaski St.Redondo Beach, CA 90278",
    },
  ]);

  const [select] = useState("");

  const SortedPosts = useMemo(() => {
    if (select) {
      return [...posts].sort((a, b) => a[select].localeCompare(b[select]));
    }
    return posts;
  }, [select, posts]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post) => {
    setPosts(posts.filter((s) => s.id !== post.id));
  };

  return (
    <div className="container">
      <div className="navbar sticky-top">
        <AmplifySignOut className="signOut" />
      </div>
      <div className="row">
        <h1 className="text-center mt-3">Welcome to my Yelp</h1>
        <div className="col-md-6 mt-5">
          <PostForm createPost={createPost} />
        </div>
        <div className="col-md-6 mt-5">
          {posts.length ? (
            <TableList
              remove={removePost}
              posts={SortedPosts}
              resName="List restaurants"
            />
          ) : (
            <h6 className="my-3 text-center">Restaurants not added yet</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default withAuthenticator(App);
