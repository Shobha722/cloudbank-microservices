import "../styles/statistics.css";

function Statistics() {

    const stats = [

        {
            value: "10M+",
            title: "Customers"
        },

        {
            value: "₹25K Cr",
            title: "Transactions"
        },

        {
            value: "99.99%",
            title: "Availability"
        },

        {
            value: "250+",
            title: "Branches"
        }

    ];

    return (

        <section className="statistics-section">

            <div className="container">

                <div className="text-center mb-5">

                    <h2>Trusted by Millions</h2>

                    <p>
                        Delivering secure cloud-native banking services across the country.
                    </p>

                </div>

                <div className="row">

                    {

                        stats.map((item,index)=>(

                            <div className="col-lg-3 col-md-6 mb-4" key={index}>

                                <div className="stat-card">

                                    <h1>{item.value}</h1>

                                    <h5>{item.title}</h5>

                                </div>

                            </div>

                        ))

                    }

                </div>

            </div>

        </section>

    );

}

export default Statistics;
