import React, { useState, useEffect, useContext } from "react";
import "./signIn.css";
import welcome from "../../Assets/welcome_cats.svg";
import AuthContext from "../../context/auth/authContext";
import AlertContext from "../../context/alert/alertContext";
const SignIn = (props) => {
  const alertContext = useContext(AlertContext);
  const authContext = useContext(AuthContext);
  const { setAlert } = alertContext;
  const { login, error, isAuthenticated } = authContext;
  const [user, setUser] = useState({
    email: "",
    password: "",
    
  });
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    if (error === "Invalid Credentials") {
      setAlert(error, "danger");
      
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated, props.history]);
  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert("Please fill in all fields", "danger");
    } else {
      login({ email, password });
    }
  };
  const { email, password } = user;

  return (
    <div className="signIn m-3 ">
      <img src={welcome} alt=""></img>
      <form onSubmit={onSubmit}>
        <input
          type="email"
          placeholder="Email address"
          name="email"
          value={email}
          onChange={onChange}
        />
        <input
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={onChange}
        />
        <button type="submit" className="btn btn-primary btn-block">
          Sign In
        </button>
      </form>
    </div>
  );
};

export default SignIn;
