import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/api/loginuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginData.email,
        password: loginData.password,
      }),
    });

    const json = await response.json();

    if (!json.success) {
      alert("Enter Valid Credentials");
    }

    if (json.success) {
      localStorage.setItem("authToken", json.authtoken);
      console.log(localStorage.getItem("authToken"))
      navigate("/");
    }
    console.log(json);
  };

  const onChange = (event) => {
    setLoginData({ ...loginData, [event.target.name]: event.target.value });
  };

  return (
    <>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={loginData.email}
              onChange={onChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="password"
              value={loginData.password}
              onChange={onChange}
            />
          </div>
          <button type="submit" className="btn btn-success">
            Login
          </button>
          <Link to="/signup" className="btn btn-danger mx-3">
            Create a account
          </Link>
        </form>
      </div>
    </>
  );
};
