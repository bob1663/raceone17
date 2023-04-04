import React, { useState } from "react";
import "./AddCar.css";

const AddCar = () => {
  const [values, setValues] = useState({
    price: "",
    peakPower: "",
    wheelbase: "",
    weight: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  // ------------------------------------------------
  const [addCarImg, setAddCarUrl] = useState([]);

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
        setAddCarUrl(reader.result);
        const imgContainer = document.querySelector(".image-upload-container");
        const img = document.createElement("img");
        img.src = reader.result;
        imgContainer.innerHTML = "";
        imgContainer.appendChild(img);
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
        setAddCarUrl(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  return (
    <div className="app__addCar">
      <div className="app__addCar-container">
        <h1>add car</h1>
        <span></span>
        <div className="app__addCar-container_hint">
          <p>
            1. Fill in all required fields to make your product look as
            attractive as possible to potential buyers.
          </p>
          <p>
            2. Write a detailed description of the car, including its technical
            specifications, level of wear and tear, and service history.
          </p>
        </div>
        <div className="app__addCar-container_form">
          <form>
            <p style={{ marginBottom: "5px" }}>Set Images</p>
            <div
              className="image-loader"
              onDrop={handleDrop}
              onDragOver={handleDragOver}
            >
              <label htmlFor="file-upload">
                Drag & drop file or browse your computer, you can add more than
                one
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
            <div className="image-upload-container"></div>
            <p style={{ marginTop: "20px", marginBottom: "5px" }}>Name</p>
            <input type="text" />
            <p style={{ marginTop: "20px", marginBottom: "5px" }}>Price, £</p>
            <input
              type="number"
              name="price"
              value={values.price}
              onChange={handleChange}
            />
            {values.price < 0 && <h6>Incorrect value</h6>}
            <p style={{ marginTop: "20px", marginBottom: "5px" }}>
              Peak power, hp
            </p>
            <input
              type="number"
              name="peakPower"
              value={values.peakPower}
              onChange={handleChange}
            />
            {values.peakPower < 0 && <h6>Incorrect value</h6>}
            <p style={{ marginTop: "20px", marginBottom: "5px" }}>
              Wheelbase, mm
            </p>
            <input
              type="number"
              name="wheelbase"
              value={values.wheelbase}
              onChange={handleChange}
            />
            {values.wheelbase < 0 && <h6>Incorrect value</h6>}
            <p style={{ marginTop: "20px", marginBottom: "5px" }}>Weight, kg</p>
            <input
              type="number"
              name="weight"
              value={values.weight}
              onChange={handleChange}
            />
            {values.weight < 0 && <h6>Incorrect value</h6>}
            <button type="submit">Add Car</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCar;
