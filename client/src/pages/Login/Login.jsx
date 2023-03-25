import React, { useState } from "react";
import { images } from "../../constants";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="app__login">
      <div className="app__login-container">
        <img
          src={images.loginIco}
          alt="loginIco"
          className="app__login-container_img"
        />
        <h1>Welcome!</h1>
        <p className="app__login-container_p">Sign in to your account</p>
        <form>
          <p>Name</p>
          <input
            type="text"
            style={{
              marginBottom: "15px",
              backgroundImage: `url(${images.user})`,
            }}
          />
          <p>Password</p>
          <input
            type={showPassword ? "text" : "password"}
            style={{ backgroundImage: `url(${images.eye})` }}
          />
          <h6
            className="app__login-container_smallp"
            onClick={togglePasswordVisibility}
          >
            See password
          </h6>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
