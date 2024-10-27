import React, { useState } from "react";

export const SignupForm = ({ title = "Signup" }) => {
  // State variables to store form data
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  // Handler for form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Submited form data in JSON: ${JSON.stringify(formData)}`);
  };

  return (
    <>
      <h1 className="text-center mb-4 text-warning mt-5 m-5 ">{title}</h1>
      <div className="container w-50">
        <form onSubmit={handleSubmit} noValidate autoComplete="off">
          <div className="mb-3 mt-3">
            <label htmlFor="username" className="form-label text-light">
              Username:
            </label>
            <input
              className="form-control p-3 bg-dark text-light fw-bold fs-5 border-0 rounded-4"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="email" className="form-label text-light">
              Email:
            </label>
            <input
              className="form-control p-3 bg-dark text-light fw-bold fs-5 border-0 rounded-4"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="password" className="form-label text-light">
              Password:
            </label>
            <input
              className="form-control p-3 bg-dark text-light fw-bold fs-5 border-0 rounded-4"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary w-100 p-2 text-bg-warning border-0 fw-bold"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

