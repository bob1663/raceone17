import React, { useState } from "react";
import { images } from "../../constants";
import "./Login.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { fetchAuth, selectIsAuth } from "../../redux/slices/auth";
import { Navigate } from "react-router-dom";

const Login = () => {
  const isAuth = useSelector(selectIsAuth);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });

  const [alert, setAlert] = useState("");

  const onSumbit = async (values) => {
    const data = await dispatch(fetchAuth(values));

    if (!data.payload) {
      setAlert("Could not authorize");
    }

    if ("token" in data.payload) {
      window.localStorage.setItem("token", data.payload.token);
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  if (isAuth) {
    return <Navigate to="/" />;
  }

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
        <p className="alert">{alert}</p>
        <form onSubmit={handleSubmit(onSumbit)}>
          <p>Email</p>
          <input
            placeholder="Enter email"
            {...register("email", { required: "Enter email" })}
            type="email"
            style={{
              marginBottom: "15px",
              backgroundImage: `url(${images.user})`,
            }}
          />
          <p>Password</p>
          <input
            placeholder="Enter password"
            {...register("password", { required: "Enter password" })}
            type={showPassword ? "text" : "password"}
            style={{ backgroundImage: `url(${images.lock})` }}
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
