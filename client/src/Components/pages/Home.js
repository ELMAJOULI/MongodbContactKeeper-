import React, { useContext, useEffect } from "react";
import Contacts from "../contacts/Contacts";
import ContactForm from "../contacts/ContactForm";
import ContactFilter from "../contacts/contactFilter";
import AuthContext from "../../context/auth/authContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  useEffect(() => {
    loadUser();
    // eslint-disable-next-line
  }, []);
  const { loadUser } = authContext;

  return (
    <div className="grid-2">
      <div>
        <ContactForm></ContactForm>
      </div>
      <div>
        <ContactFilter></ContactFilter>
        <Contacts></Contacts>
      </div>
    </div>
  );
};

export default Home;
