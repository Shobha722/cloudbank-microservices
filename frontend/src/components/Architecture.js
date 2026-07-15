import "../styles/architecture.css";

function Architecture() {

    return (

        <section className="architecture-section">

            <div className="container">

                <div className="text-center mb-5">

                    <h2>Cloud Native Architecture</h2>

                    <p>
                        React • Flask Microservices • Docker • Kubernetes • AWS
                    </p>

                </div>

                <div className="architecture-box">

                    <div className="level">

                        <div className="node internet">
                            🌐 Internet
                        </div>

                    </div>

                    <div className="arrow">↓</div>

                    <div className="level">

                        <div className="node alb">
                            AWS Application Load Balancer
                        </div>

                    </div>

                    <div className="arrow">↓</div>

                    <div className="level">

                        <div className="node eks">
                            Amazon EKS Cluster
                        </div>

                    </div>

                    <div className="arrow">↓</div>

                    <div className="services">

                        <div className="service">
                            🔐 Authentication
                        </div>

                        <div className="service">
                            👤 Accounts
                        </div>

                        <div className="service">
                            💳 Transactions
                        </div>

                        <div className="service">
                            🏦 Loans
                        </div>

                    </div>

                    <div className="arrow">↓</div>

                    <div className="level">

                        <div className="node database">

                            PostgreSQL Database

                            <br/>

                            Amazon RDS

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Architecture;
