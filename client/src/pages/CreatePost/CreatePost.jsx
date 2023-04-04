import React, { useState } from "react";
import "./CreatePost.css";

const CreatePost = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);

  const handleImageChange = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.target.files[0];

    if (
      file &&
      (file.type === "image/jpeg" || file.type === "image/png") &&
      file.size <= 30000000
    ) {
      reader.onloadend = () => {
        setImagePreviewUrl([...imagePreviewUrl, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    let reader = new FileReader();
    let file = e.dataTransfer.files[0];

    if (
      file &&
      (file.type === "image/jpeg" || file.type === "image/png") &&
      file.size <= 30000000
    ) {
      reader.onloadend = () => {
        setImagePreviewUrl([...imagePreviewUrl, reader.result]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app__createPost">
      <div className="app__createPost-imagePreview">
        <h1>Image preview</h1>
        <span></span>
        <div className="app__createPost-imagePreview_container">
          {/* <div className="app__createPost-imagePreview_img"></div> */}
          {imagePreviewUrl.map((url) => (
            <img
              src={url}
              alt=""
              className="app__createPost-imagePreview_img"
            />
          ))}
        </div>
      </div>
      <div className="app__createPost-addPost">
        <h1>aDD POsT</h1>
        <span></span>
        <div className="app__createPost-addPost_wrapper">
          <div className="app__createPost-addPost_container">
            <form>
              <p style={{ marginBottom: "10px" }}>Add images</p>
              {/* ------------------------------------------------------------------- */}
              <div
                className="image-loader"
                onDrop={handleDrop}
                onDragOver={handleDragOver}
              >
                <label htmlFor="file-upload">
                  Drag & drop file or browse your computer, you can add more
                  than one
                </label>
                <label htmlFor="file-upload">
                  Support .jpg .png max 30Mb, recommended image size 1140x450
                </label>
                <label htmlFor="file-upload">Add image</label>
                <input
                  id="file-upload"
                  type="file"
                  onChange={handleImageChange}
                  accept="image/jpeg, image/png"
                />
              </div>
              {/* ------------------------------------------------------------------- */}
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
