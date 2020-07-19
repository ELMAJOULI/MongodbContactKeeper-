import React, { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import ContactContext from "../../context/contacts/contactContext";
const Navbar = () => {
  const authContext = useContext(AuthContext);
  const contactContext = useContext(ContactContext);
  const { isAuthenticated, logout, user } = authContext;
  const { clearContacts } = contactContext;
  const onLogout = () => {
    logout();
    clearContacts();
  };
  const authLinks = (
    <Fragment>
      <li> Hello {user && user.name}</li>
      <li>
        <a onClick={onLogout} href="#!">
          <i className="fas fa-sign-out-alt"></i>
          <span className="hide-sm">Logout</span>
        </a>
      </li>
    </Fragment>
  );
  const gueLstinks = (
    <Fragment>
      <li>
        <Link to="signIn">Sign In </Link>
      </li>
      <li>
        <Link to="signUp">Sign Up </Link>
      </li>
    </Fragment>
  );
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className="far fa-address-book"></i> Contact Keeper
      </h1>
      <ul>{isAuthenticated ? authLinks : gueLstinks}</ul>
    </nav>
  );
};

export default Navbar;
