import React from "react";
import { Link } from 'react-router-dom';

export const Nevbar = () => {
  return (
    <div>
      <div className="container-fluid p-0 my-3">
        <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 py-lg-0 px-lg-5">
          <Link to="/" className="navbar-brand ml-lg-3">
            <h1 className="m-0 text-uppercase text-primary"><i className="fa fa-food mr-3" />FastFood</h1>
          </Link>
          <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse justify-content-between px-lg-3" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              <Link to="/" className="nav-item nav-link active">Home</Link>
              <Link to="/" className="nav-item nav-link">About</Link>
            </div>
            <Link to="/login" className="btn btn-primary py-2 d-none d-lg-block mx-2">Login</Link>
            <Link to="/signup" className="btn btn-danger py-2 d-none d-lg-block">Signup</Link>
          </div>
        </nav>
      </div>
    </div>
  );
};
