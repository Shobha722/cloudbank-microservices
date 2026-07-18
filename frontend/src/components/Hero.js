import LoginCard from "./LoginCard";
import "../styles/hero.css";

function Hero() {

  return (

    <section className="hero-section">

      <div className="hero-overlay">

        <div className="container">

          <div className="row align-items-center">

            {/* Left Side */}

            <div className="col-lg-7">

              <div className="hero-content">

                <span className="hero-tag">
                  Cloud Native Banking Platform
                </span>

                <h1>
                  Welcome to
                  <br />
                  CloudBank
                </h1>

                <p>
                  A secure, scalable and cloud-native banking application
                  powered by React, Python Flask, Docker, Kubernetes and AWS.
                </p>

                <div className="hero-buttons">

                  <button className="btn btn-warning btn-lg me-3">
                    Get Started
                  </button>

                  <button className="btn btn-outline-light btn-lg">
                    Learn More
                  </button>

                </div>

                <div className="hero-stats mt-5">

                  <div>

                    <h3>10M+</h3>

                    <span>Customers</span>

                  </div>

                  <div>

                    <h3>99.99%</h3>

                    <span>Availability</span>

                  </div>

                  <div>

                    <h3>250+</h3>

                    <span>Branches</span>

                  </div>

                </div>

              </div>

            </div>

            {/* Right Side */}

            <div className="col-lg-5">

              <LoginCard />

            </div>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Hero;
