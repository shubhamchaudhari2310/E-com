import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Navbar() {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
        <div className="container">

          <Link className="navbar-brand" to={"/"}>
            SKILLSHOP
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Signup"}>
                  Signup
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/login"}>
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/dashboard"}>
                  Dashboard
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to={"/add-product"}>
                  Add Product
                </Link>
              </li>
              <li>
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to={"/cart"}
                >
                  Cart <span className="badge bg-dark">{cartItem.reduce((sum, item) => sum + item.qty, 0)}</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
