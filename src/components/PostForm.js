import React, {useState} from "react";
import MyButton from "./UI/button/MyButton";
import MyInput from "./UI/input/MyInput";


export default function PostForm({createPost}) {
  const [post, setPost] = useState({resName: "", resLocation: ""})
  const addPost = (e) => {
    e.preventDefault();
    const newPost = {
        ...post,
        id: Date.now()
    }
    createPost(newPost)
  }
  return (
    <>
      <h4 className="text-center ">New add Restaurants</h4>
      <form>
        <MyInput
          type="text"
          className="form-control"
          placeholder="Name"
          value={post.resName}
          onChange={(e) => setPost({ ...post, resName: e.target.value })}
        />
        <MyInput
          type="text"
          className="form-control my-2"
          placeholder="Location"
          value={post.resLocation}
          onChange={(e) => setPost({ ...post, resLocation: e.target.value })}
        />
        <MyButton className="btn btn-primary w-30" onClick={addPost}>
          Add post
        </MyButton>
      </form>
    </>
  );
}