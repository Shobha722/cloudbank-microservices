import { Link } from "react-router-dom";

function Navbar() {
    return (

        <nav className="navbar navbar-expand-lg custom-navbar">

            <div className="container-fluid">

                {/* Left Side */}
                <div className="navbar-left">

                    <i className="bi bi-bank2 bank-icon"></i>

                </div>


                {/* Center */}

                <div className="navbar-center">

                    <h2>CloudBank</h2>

                    <small>Enterprise Cloud Banking Platform</small>

                </div>


                {/* Right Side */}

                <div className="navbar-right">

                    <Link
                        to="/login"
                        className="btn btn-light me-2"
                    >
                        Login
                    </Link>

                    <Link
                        to="/register"
                        className="btn btn-warning"
                    >
                        Register
                    </Link>

                </div>

            </div>

        </nav>

    );
}

export default Navbar;
