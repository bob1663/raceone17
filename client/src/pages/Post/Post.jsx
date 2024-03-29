import React, { useState, useEffect } from "react";
import { images } from "../../constants";
import "./Post.css";

import Modal from "react-modal";

Modal.setAppElement("#root");

const Post = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  useEffect(() => {
    if (modalIsOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [modalIsOpen]);
  // -----------------------------------------------------------
  const [currentImage, setCurrentImage] = useState(null);
  // -----------------------------------------------------------
  return (
    <div className="app__post">
      <div className="app__post-title">
        <div className="app__post-title_wrapper">
          <h1 className="app__post-title_h1">BMW M6 GT3 Released!</h1>
        </div>
      </div>
      <div className="app__post-container">
        <div className="app__post-wrapper">
          <img
            src={images.bmwm6gt3}
            alt="PostImage"
            className="app__post-container_img"
            onClick={() => {
              setCurrentImage(images.bmwm6gt3);
              setModalIsOpen(true);
            }}
          />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={() => setModalIsOpen(false)}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                zIndex: "100",
              },
              content: {
                top: "50%",
                left: "50%",
                right: "auto",
                bottom: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                border: "none",
                padding: "0",
                borderRadius: "0",
                background: "none",
              },
            }}
          >
            <img
              src={currentImage}
              alt="PostImage"
              className={`modal-image ${modalIsOpen ? "fade-in" : "fade-out"}`}
              style={{ height: "80vh" }}
            />
          </Modal>
          <h1>BMW M6 GT3 Released!</h1>
          <div className="app__newsPost-content_info">
            <div className="app__newsPost-content_info-wrapper">
              <p>By</p>
              <p>RaceOne17</p>
            </div>
            <div className="app__newsPost-content_info-wrapper">
              <p>In</p>
              <p>Announcement, BMW M6 GT3, Released</p>
            </div>
            <div className="app__newsPost-content_info-wrapper">
              <p>Posted</p>
              <p>January 26, 2023</p>
            </div>
          </div>
          <p className="app__post-container_description">
            BMW has launched its new GT car, the M6 GT3. This is a long-awaited
            release from one of the most popular car manufacturers in the world.
          </p>
          <h3>CAR GALLERY</h3>
          <div className="app__post-container_gallery">
            <img
              src={images.ferrari360gt3}
              alt="GalleryImage"
              className="app__post-container_gallery-image"
              onClick={() => {
                setCurrentImage(images.ferrari360gt3);
                setModalIsOpen(true);
              }}
            />
            <img
              src={images.ferrari550gt3}
              alt="GalleryImage"
              className="app__post-container_gallery-image"
              onClick={() => {
                setCurrentImage(images.ferrari550gt3);
                setModalIsOpen(true);
              }}
            />
            <img
              src={images.ferrari575gt3}
              alt="GalleryImage"
              className="app__post-container_gallery-image"
              onClick={() => {
                setCurrentImage(images.ferrari575gt3);
                setModalIsOpen(true);
              }}
            />
            <img
              src={images.porsche911gt3}
              alt="GalleryImage"
              className="app__post-container_gallery-image"
              onClick={() => {
                setCurrentImage(images.porsche911gt3);
                setModalIsOpen(true);
              }}
            />
            <img
              src={images.saleen}
              alt="GalleryImage"
              className="app__post-container_gallery-image"
              onClick={() => {
                setCurrentImage(images.saleen);
                setModalIsOpen(true);
              }}
            />
            <img
              src={images.vipergt3}
              alt="GalleryImage"
              className="app__post-container_gallery-image"
              onClick={() => {
                setCurrentImage(images.vipergt3);
                setModalIsOpen(true);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
