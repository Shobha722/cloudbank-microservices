function Login() {

    return (

        <div className="container mt-5">

            <div className="row justify-content-center">

                <div className="col-md-6">

                    <div className="login-card">

                        <h2 className="mb-4 text-center">
                            Login
                        </h2>

                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Username"
                        />

                        <input
                            type="password"
                            className="form-control mb-3"
                            placeholder="Password"
                        />

                        <button className="btn btn-primary w-100">
                            Login
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}

export default Login;
