import React from "react";

function Register() {

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="login-card">

                        <h2 className="text-center mb-4">

                            Create CloudBank Account

                        </h2>

                        <form>

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Full Name"
                            />

                            <input
                                type="email"
                                className="form-control mb-3"
                                placeholder="Email Address"
                            />

                            <input
                                type="text"
                                className="form-control mb-3"
                                placeholder="Mobile Number"
                            />

                            <input
                                type="password"
                                className="form-control mb-3"
                                placeholder="Password"
                            />

                            <input
                                type="password"
                                className="form-control mb-4"
                                placeholder="Confirm Password"
                            />

                            <button
                                className="btn btn-success w-100">

                                Register

                            </button>

                        </form>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Register;
