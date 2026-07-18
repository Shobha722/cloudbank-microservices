import "../styles/features.css";

function Features() {
  return (

    <section className="features-section">

      <div className="container">

        <div className="text-center mb-5">

          <h2>Why Choose CloudBank?</h2>

          <p>
            Enterprise-grade digital banking powered by cloud-native technologies.
          </p>

        </div>

        <div className="row g-4">

          <div className="col-md-3">

            <div className="feature-card">

              <i className="bi bi-shield-lock-fill"></i>

              <h4>Secure Banking</h4>

              <p>
                End-to-end encryption with bank-grade security.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="feature-card">

              <i className="bi bi-cloud-fill"></i>

              <h4>Cloud Native</h4>

              <p>
                Built on Docker, Kubernetes and AWS.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="feature-card">

              <i className="bi bi-lightning-charge-fill"></i>

              <h4>Fast Transactions</h4>

              <p>
                Lightning-fast banking services with low latency.
              </p>

            </div>

          </div>

          <div className="col-md-3">

            <div className="feature-card">

              <i className="bi bi-phone-fill"></i>

              <h4>Digital Banking</h4>

              <p>
                Access your bank anytime, anywhere.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>

  );
}

export default Features;
