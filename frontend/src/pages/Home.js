function Home() {
    return (

        <div>

            {/* Hero Section */}

            <section className="hero">

                <i
                    className="bi bi-bank2"
                    style={{
                        fontSize: "80px",
                        color: "#001B4D"
                    }}
                ></i>

                <h1>Welcome to Cloud Native Banking Application</h1>

                <p>
                    Secure • Scalable • Highly Available Banking Platform
                </p>

                <button className="btn btn-primary btn-lg mt-3">
                    Explore Services
                </button>

            </section>


            {/* Banking Services */}

            <div className="container mb-5">

                <div className="row g-4">

                    <div className="col-md-3">

                        <div className="service-card text-center">

                            <i
                                className="bi bi-wallet2"
                                style={{
                                    fontSize: "50px",
                                    color: "#001B4D"
                                }}
                            ></i>

                            <h4 className="mt-3">
                                Accounts
                            </h4>

                            <p>
                                Manage Savings & Current Accounts
                            </p>

                        </div>

                    </div>


                    <div className="col-md-3">

                        <div className="service-card text-center">

                            <i
                                className="bi bi-arrow-left-right"
                                style={{
                                    fontSize: "50px",
                                    color: "#001B4D"
                                }}
                            ></i>

                            <h4 className="mt-3">
                                Transactions
                            </h4>

                            <p>
                                Fast & Secure Money Transfers
                            </p>

                        </div>

                    </div>


                    <div className="col-md-3">

                        <div className="service-card text-center">

                            <i
                                className="bi bi-cash-stack"
                                style={{
                                    fontSize: "50px",
                                    color: "#001B4D"
                                }}
                            ></i>

                            <h4 className="mt-3">
                                Loans
                            </h4>

                            <p>
                                Home, Vehicle & Personal Loans
                            </p>

                        </div>

                    </div>


                    <div className="col-md-3">

                        <div className="service-card text-center">

                            <i
                                className="bi bi-speedometer2"
                                style={{
                                    fontSize: "50px",
                                    color: "#001B4D"
                                }}
                            ></i>

                            <h4 className="mt-3">
                                Dashboard
                            </h4>

                            <p>
                                Monitor Your Banking Activities
                            </p>

                        </div>

                    </div>

                </div>

            </div>


            {/* Technology Section */}

            <section className="container text-center mb-5">

                <h2 className="mb-4">
                    Powered By
                </h2>

                <div className="row">

                    <div className="col-md-3">

                        <h4>☁ AWS</h4>

                    </div>

                    <div className="col-md-3">

                        <h4>☸ Kubernetes</h4>

                    </div>

                    <div className="col-md-3">

                        <h4>🐳 Docker</h4>

                    </div>

                    <div className="col-md-3">

                        <h4>⚛ React</h4>

                    </div>

                </div>

            </section>

        </div>

    );
}

export default Home;
