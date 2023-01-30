import React from "react";
import { Github, Instagram, Facebook } from "react-bootstrap-icons";

export const Footer = () => {
  return (
    <>
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <div className="col-md-4 d-flex align-items-center">
          <a
            href="/"
            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
          >
            <svg className="bi" width="30" height="24">
              <use href="/"></use>
            </svg>
          </a>
          <span className="mb-3 mb-md-0 text-muted">© 2022 Company, Inc</span>
        </div>

        <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
          <li className="mx-2">
            <a className="text-muted" href="https://github.com/ankitbisen28">
             <Github />
            </a>
          </li>
          <li className="mx-2">
            <a className="text-muted" href="/">
              <Facebook />
            </a>
          </li>
          <li className="mx-2">
            <a className="text-muted" href="https://instagram.com/ankybisen" rel="noreferrer">
            <Instagram />
             </a>
          </li>
        </ul>
      </footer>
    </>
  );
};
