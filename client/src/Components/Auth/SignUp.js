import React, { useState, useContext, useEffect } from "react";
import signUp from "../../Assets/sign_up.svg";
import "./signIn.css";
import AlertContext from "../../context/alert/alertContext";
import AuthContext from "../../context/auth/authContext";

const SignUp = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert, clearErrors } = alertContext;
  const { register, error, isAuthenticated } = authContext;
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "User already exists") {
      setAlert(error, "danger");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const { name, email, password, password2 } = user;
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert("Please enter all fields", "danger");
    } else if (password !== password2) {
      setAlert("Passwords do not match ", "danger");
    } else {
      register({
        name,
        email,
        password,
      });
    }
  };

  return (
    <div className="signIn m-3">
      <img src={signUp} alt=""></img>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={onChange}
          required
        />
        <input
          type="email"
          placeholder="Email adress"
          name="email"
          value={email}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
          required
        />
        <input
          type="password"
          placeholder="Confirm password"
          name="password2"
          value={password2}
          onChange={onChange}
          required
        />
        <button type="submit" className="btn btn-primary btn-block">
          Sign Up
        </button>
        <p>
          Already have an account?{" "}
          <button className="btn btn-link">Sign In</button>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
