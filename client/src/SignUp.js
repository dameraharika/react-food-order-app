import { useState, useEffect } from "react";

function SignUp({ onSignUp }) {
    const initialValues = {
        username: "",
        password: "",
        confirmPassword: "",
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
            console.log(formValues);
            onSignUp(); // Call the onSignUp function to navigate to the desired page
        }
    }, [formErrors, formValues, isSubmit, onSignUp]);

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
        if (values.password !== values.confirmPassword) {
            errors.confirmPassword = "Passwords do not match";
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
                        background: url(https://images.unsplash.com/photo-1622667042273-e0e54442440a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80);
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
                    <div className="ui message success">
                        Signed up successfully
                    </div>
                ) : (
                    console.log("Entered Details", formValues)
                )}

                <form onSubmit={handleSubmit}>
                    <h1>Sign Up</h1>
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
                        <div className="field">
                            <label>Confirm Password</label>
                            <input
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formValues.confirmPassword}
                                onChange={handleChange}
                            />
                        </div>
                        <p>{formErrors.confirmPassword}</p>
                        <button className="fluid ui button blue">Sign Up</button>
                    </div>
                </form>
                <div className="text">
                    Already have an account? <span>Login</span>
                </div>
            </div>
        </>
    );
}

export default SignUp;
