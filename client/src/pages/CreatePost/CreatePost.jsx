import React, { useState } from "react";
import "./CreatePost.css";
import { images } from "../../constants";

const CreatePost = () => {
  const [imagePreviewUrl, setImagePreviewUrl] = useState([]);
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let reader = new FileReader();
    let file = e.dataTransfer.files[0];

    if (
      file &&
      file.size <= 30000000 &&
      (file.type === "image/jpeg" || file.type === "image/png")
    ) {
      reader.onloadend = () => {
        setImagePreviewUrl([...imagePreviewUrl, reader.result]);
      };
      reader.readAsDataURL(file);
    }
    setDragging(false);
  };

  const handleImageChange = (e) => {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    if (
      file &&
      file.size <= 30000000 &&
      (file.type === "image/jpeg" || file.type === "image/png")
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
                className={`image-loader ${dragging ? "dragging" : ""}`}
                onDragEnter={handleDragEnter}
                onDragLeave={handleDragLeave}
                onDragOver={handleDragOver}
                onDrop={handleDrop}
                // onClick={() => document.getElementById("file-upload").click()}
              >
                <div className="image-loader_img-wrapper">
                  <img src={images.AddImageIcon} alt="AddImageIcon" />
                </div>
                <div className="image-loader_wrapper">
                  <label htmlFor="file-upload" className="custom-file-upload">
                    Drag & drop file or browse your computer, you can add more
                    than one
                  </label>
                  <label
                    htmlFor="file-upload"
                    className="custom-file-upload_smaller"
                  >
                    Support .jpg .png max 30Mb
                  </label>
                  <input
                    id="file-upload"
                    type="file"
                    onChange={handleImageChange}
                  />
                </div>
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
