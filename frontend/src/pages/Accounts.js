import React from "react";

function Accounts() {

  const accounts = [
    {
      type: "Savings Account",
      number: "XXXX1234",
      balance: "₹1,80,000",
      status: "Active"
    },
    {
      type: "Current Account",
      number: "XXXX5678",
      balance: "₹65,000",
      status: "Active"
    }
  ];

  return (

    <div className="container mt-5">

      <h2 className="mb-4">My Accounts</h2>

      <table className="table table-bordered table-hover">

        <thead className="table-dark">

          <tr>

            <th>Account Type</th>

            <th>Account Number</th>

            <th>Available Balance</th>

            <th>Status</th>

          </tr>

        </thead>

        <tbody>

          {accounts.map((acc,index)=>(

            <tr key={index}>

              <td>{acc.type}</td>

              <td>{acc.number}</td>

              <td>{acc.balance}</td>

              <td>

                <span className="badge bg-success">

                  {acc.status}

                </span>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

}

export default Accounts;
