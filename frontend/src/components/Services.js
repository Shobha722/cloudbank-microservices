import "../styles/services.css";

function Services() {

    const services = [

        {
            icon: "bi-wallet2",
            title: "Savings Account",
            description: "Secure savings accounts with attractive interest rates."
        },

        {
            icon: "bi-bank",
            title: "Current Account",
            description: "Business banking with unlimited transactions."
        },

        {
            icon: "bi-credit-card-2-front",
            title: "Credit Cards",
            description: "Premium credit cards with exciting rewards."
        },

        {
            icon: "bi-arrow-left-right",
            title: "Money Transfer",
            description: "Instant UPI, IMPS, RTGS & NEFT transfers."
        },

        {
            icon: "bi-graph-up-arrow",
            title: "Fixed Deposits",
            description: "Grow your wealth with competitive FD rates."
        },

        {
            icon: "bi-house-heart-fill",
            title: "Home Loans",
            description: "Affordable home loans with flexible EMIs."
        }

    ];

    return (

        <section className="services-section">

            <div className="container">

                <div className="text-center mb-5">

                    <h2>Our Banking Services</h2>

                    <p>

                        Everything you need for secure cloud-native banking.

                    </p>

                </div>

                <div className="row g-4">

                    {

                        services.map((service,index)=>(

                            <div className="col-lg-4 col-md-6" key={index}>

                                <div className="service-box">

                                    <i className={`bi ${service.icon}`}></i>

                                    <h4>{service.title}</h4>

                                    <p>{service.description}</p>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Services;
