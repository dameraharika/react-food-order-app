import { useState, useEffect } from "react";

function Login({ onLogin }) {
  const initialValues = {
    username: "",
    password: "",
  };

  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log("Entered Details", formValues); // Now properly logs the form values.
      onLogin(); // Call the onLogin function to navigate to FoodDisplay.
    }
  }, [formErrors, formValues, isSubmit, onLogin]);

  const validate = (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 4) {
      errors.password = "Password must be more than 4 characters";
    } else if (values.password.length > 10) {
      errors.password = "Password cannot exceed more than 10 characters";
    }
    return errors;
  };

  return (
    <>
      <style>
        {`
          * {
            box-sizing: border-box;
          }

          body {
            background: url('https://images.unsplash.com/photo-1622667042273-e0e54442440a?ixlib=rb-25.1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            height: 100%;
          }

          .container {
            display: flex !important;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: 100vh;
            max-width: 500px;
            width: 100%;
            margin: auto;
          }

          .container > form {
            width: 70%;
            border: 1px solid #dfdfdf;
            padding: 20px;
            border-radius: 5px;
            background: #fff;
          }

          input {
            padding-top: 10px;
            padding-bottom: 10px;
            margin-left: 25px;
            border-radius: 9%;
          }

          button {
            background: #05b462 !important;
            padding: 5px;
            border-radius: 10px;
            width: 100%;
          }

          p {
            color: rgb(255, 0, 0);
          }

          .text {
            margin: 2px;
            padding: 5px;
          }

          span {
            color: rgb(0, 95, 236);
            cursor: pointer;
          }
        `}
      </style>
      <div className="container">
        {Object.keys(formErrors).length === 0 && isSubmit ? (
          <div className="ui message success">Logged in successfully</div>
        ) : null}

        <form onSubmit={handleSubmit}>
          <h1>Login</h1> {/* Change the header text to Login */}
          <div className="ui divider"></div>
          <div className="ui form">
            <div className="field">
              <label>Username</label>
              <input
                type="text"
                name="username"
                placeholder="Enter your username"
                value={formValues.username}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.username}</p>

            <div className="field">
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formValues.password}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.password}</p>

            <button className="fluid ui button blue">Login</button> {/* Change button text to Login */}
          </div>
        </form>
        <div className="text">
          Don't have an account? <span>Sign Up</span> {/* Adjust this to indicate signup */}
        </div>
      </div>
    </>
  );
}

export default Login;
