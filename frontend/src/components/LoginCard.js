import { Link } from "react-router-dom";
import "../styles/login.css";

function LoginCard() {
  return (
    <div className="login-card">

      <h3 className="text-center mb-4">
        <i className="bi bi-shield-lock-fill me-2"></i>
        Secure Login
      </h3>

      <form>

        <div className="mb-3">

          <label className="form-label">
            Username
          </label>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Username"
          />

        </div>

        <div className="mb-3">

          <label className="form-label">
            Password
          </label>

          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
          />

        </div>

        <div className="d-flex justify-content-between mb-4">

          <div>

            <input
              type="checkbox"
            />

            <span className="ms-2">
              Remember Me
            </span>

          </div>

          <a href="/">
            Forgot?
          </a>

        </div>

        <button
          className="btn btn-warning w-100 login-button"
        >
          Login
        </button>

        <div className="text-center mt-4">

          New Customer?

          <Link
            className="ms-2"
            to="/register"
          >
            Register
          </Link>

        </div>

      </form>

    </div>
  );
}

export default LoginCard;
