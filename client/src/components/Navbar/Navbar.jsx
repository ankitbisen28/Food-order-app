import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal/Modal";
import { Cart } from "../Cart/Cart";
import { useCart } from "../../ContextReducer/ContextReducer";

export const Nevbar = () => {
  const navigate = useNavigate();
  let data = useCart();

  const [cardView, setCardView] = useState(false);

  const handleLogOut = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userEmail")
    navigate("/login");
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            FastFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {localStorage.getItem("authToken") ? (
                <div className="d-flex">
                  <li className="nav-item">
                    <Link to="/" className="nav-item nav-link active">
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link to="/myOrder" className="nav-item nav-link">
                      My Orders
                    </Link>
                  </li>
                </div>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link
                  to="/login"
                  className="btn btn-primary py-2 d-none d-lg-block mx-2"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="btn btn-danger py-2 d-none d-lg-block"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div className="d-flex" onClick={() => setCardView(true)}>
                <div className="btn btn-success py-2 d-none d-lg-block mx-2">
                  My Cart <Badge bg="danger">{data.length !== 0 ? data.length : ""}</Badge>
                </div>
                {cardView ? (
                  <Modal onClose={(e) => {setCardView(false);
                    e.stopPropagation();
                  } }>
                    <Cart />
                  </Modal>
                ) : ""}
                <div
                  onClick={handleLogOut}
                  className="btn btn-danger py-2 d-none d-lg-block"
                >
                  Log out
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};
