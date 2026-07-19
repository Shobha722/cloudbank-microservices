import React from "react";

function Transactions() {

  const transactions = [
    {
      date: "15-Jul-2026",
      description: "Salary Credit",
      amount: "+ ₹50,000",
      type: "Credit",
      status: "Success"
    },
    {
      date: "16-Jul-2026",
      description: "Amazon Purchase",
      amount: "- ₹2,500",
      type: "Debit",
      status: "Success"
    },
    {
      date: "16-Jul-2026",
      description: "Electricity Bill",
      amount: "- ₹1,200",
      type: "Debit",
      status: "Success"
    },
    {
      date: "17-Jul-2026",
      description: "UPI Transfer",
      amount: "- ₹850",
      type: "Debit",
      status: "Success"
    },
    {
      date: "18-Jul-2026",
      description: "Interest Credit",
      amount: "+ ₹550",
      type: "Credit",
      status: "Success"
    }
  ];

  return (

    <div className="container mt-5">

      <h2 className="mb-4">Transaction History</h2>

      <table className="table table-striped table-hover table-bordered">

        <thead className="table-dark">

          <tr>

            <th>Date</th>
            <th>Description</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {transactions.map((txn,index)=>(

            <tr key={index}>

              <td>{txn.date}</td>

              <td>{txn.description}</td>

              <td>{txn.type}</td>

              <td>{txn.amount}</td>

              <td>

                <span className="badge bg-success">

                  {txn.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Transactions;
