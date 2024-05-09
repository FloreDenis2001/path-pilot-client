import React from "react";
import { Link } from "react-router-dom";

const InvalidToken = () => {
  return (
    <section id="register">   
      <div className="page__container">
        <p className="cancelled button__text">Invalid Token</p>
        <Link to="/login">
          <button className="button button__first">Go Back</button>
        </Link>
      </div>
    </section>
  );
};

export default InvalidToken;
