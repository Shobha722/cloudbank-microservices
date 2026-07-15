import React from "react";

function Loans() {

  const loans = [
    {
      type: "Home Loan",
      amount: "₹6,20,000",
      emi: "₹18,500 / Month",
      status: "Active"
    },
    {
      type: "Personal Loan",
      amount: "Eligible up to ₹5,00,000",
      emi: "-",
      status: "Apply Now"
    },
    {
      type: "Education Loan",
      amount: "Eligible up to ₹10,00,000",
      emi: "-",
      status: "Available"
    }
  ];

  return (

    <div className="container mt-5">

      <h2 className="mb-4">Loans</h2>

      <div className="row">

        {loans.map((loan,index)=>(

          <div className="col-md-4 mb-4" key={index}>

            <div className="card shadow h-100">

              <div className="card-body text-center">

                <i className="bi bi-bank display-4 text-primary"></i>

                <h4 className="mt-3">{loan.type}</h4>

                <p><strong>{loan.amount}</strong></p>

                <p>{loan.emi}</p>

                <button className="btn btn-warning">

                  {loan.status}

                </button>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}

export default Loans;
