import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/api";

function Register() {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match");
            return;
        }

        try {

            const response = await api.post("/register", {
                name: formData.name,
                email: formData.email,
                mobile: formData.mobile,
                password: formData.password
            });

            alert(response.data.message || "Registration Successful");

            navigate("/login");

        } catch (err) {

            console.error(err);

            alert(
                err.response?.data?.message ||
                "Registration Failed"
            );
        }
    };

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="login-card">

                        <h2 className="text-center mb-4">
                            Create CloudBank Account
                        </h2>

                        <form onSubmit={handleSubmit}>

                            <input
                                className="form-control mb-3"
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-3"
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-3"
                                type="text"
                                name="mobile"
                                placeholder="Mobile Number"
                                value={formData.mobile}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-3"
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />

                            <input
                                className="form-control mb-4"
                                type="password"
                                name="confirmPassword"
                                placeholder="Confirm Password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />

                            <button
                                type="submit"
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
