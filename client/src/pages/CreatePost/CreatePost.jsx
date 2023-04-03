import React from "react";
import "./CreatePost.css";

const CreatePost = () => {
  return (
    <div className="app__createPost">
      <div className="app__createPost-imagePreview">
        <h1>Image preview</h1>
        <div className="app__createPost-imagePreview_container">
          <div className="app__createPost-imagePreview_img"></div>
          <div className="app__createPost-imagePreview_img"></div>
          <div className="app__createPost-imagePreview_img"></div>
          <div className="app__createPost-imagePreview_img"></div>
          <div className="app__createPost-imagePreview_img"></div>
          <div className="app__createPost-imagePreview_img"></div>
          <div className="app__createPost-imagePreview_img"></div>
          <div className="app__createPost-imagePreview_img"></div>
        </div>
      </div>
      <div className="app__createPost-addPost">
        <h1>aDD POsT</h1>
        <span></span>
        <div className="app__createPost-addPost_wrapper">
          <div className="app__createPost-addPost_container">
            <form>
              <p style={{ marginBottom: "10px" }}>Add images</p>
              <div className="test"></div>
              <p style={{ marginTop: "20px", marginBottom: "5px" }}>Title</p>
              <input type="text" />
              <p style={{ marginTop: "20px", marginBottom: "5px" }}>Subtitle</p>
              <input type="text" />
              <p style={{ marginTop: "20px", marginBottom: "5px" }}>
                Description
              </p>
              <textarea cols="1" rows="1"></textarea>
              <button type="submit">Add post</button>
            </form>
          </div>
          <div className="app__createPost-addPost_hint">
            <p>
              1. Сreate an attractive headline that will grab the attention of
              readers.
            </p>
            <p>
              2. Write a clear and concise text in which you express your
              opinion or share information that may be interesting.
            </p>
            <p>
              3. Add a visual element, such as an images, to make your post more
              engaging and capture the attention of readers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
