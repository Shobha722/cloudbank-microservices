import { Link } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark cloudbank-navbar">

      <div className="container">

        {/* Brand */}

        <Link to="/" className="navbar-brand d-flex align-items-center">

          <i className="bi bi-bank2 bank-logo"></i>

          <div className="brand-text">

            <h2>CloudBank</h2>

            <span>Enterprise Cloud Banking Platform</span>

          </div>

        </Link>

        {/* Mobile Button */}

        <button
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >

          <ul className="navbar-nav align-items-center">

            <li className="nav-item">

              <Link className="nav-link" to="/">
                Home
              </Link>

            </li>

            <li className="nav-item">

              <Link className="nav-link" to="/dashboard">
                Dashboard
              </Link>

            </li>

            <li className="nav-item">

              <Link className="nav-link" to="/accounts">
                Accounts
              </Link>

            </li>

            <li className="nav-item">

              <Link className="nav-link" to="/transactions">
                Transactions
              </Link>

            </li>

            <li className="nav-item">

              <Link className="nav-link" to="/loans">
                Loans
              </Link>

            </li>

            <li className="nav-item ms-3">

              <Link
                className="btn btn-outline-light login-btn"
                to="/login"
              >
                Login
              </Link>

            </li>

            <li className="nav-item ms-2">

              <Link
                className="btn register-btn"
                to="/register"
              >
                Register
              </Link>

            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
