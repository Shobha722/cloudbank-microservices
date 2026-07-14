function Footer() {
    return (

        <footer>

            <div className="container">

                <div className="row">

                    <div className="col-md-4">

                        <h5>
                            <i className="bi bi-shield-lock-fill me-2"></i>
                            Secure Banking
                        </h5>

                        <p>
                            Bank-grade security with encrypted transactions.
                        </p>

                    </div>

                    <div className="col-md-4">

                        <h5>
                            <i className="bi bi-cloud-fill me-2"></i>
                            Cloud Native
                        </h5>

                        <p>
                            Powered by AWS, Kubernetes and Docker.
                        </p>

                    </div>

                    <div className="col-md-4">

                        <h5>
                            <i className="bi bi-diagram-3-fill me-2"></i>
                            Microservices
                        </h5>

                        <p>
                            Highly Available • Scalable • Resilient
                        </p>

                    </div>

                </div>

                <hr style={{ borderColor: "#ffffff55" }} />

                <p className="mb-1">
                    © 2026 CloudBank. All Rights Reserved.
                </p>

                <small>
                    Privacy Policy | Terms & Conditions | Contact Us
                </small>

            </div>

        </footer>

    );
}

export default Footer;
