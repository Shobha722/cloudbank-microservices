import "../styles/dashboard.css";

function RecentTransactions() {

  const transactions = [
    {
      date: "15-Jul-2026",
      description: "Salary Credit",
      amount: "+ ₹50,000",
      status: "Success"
    },
    {
      date: "16-Jul-2026",
      description: "Amazon Purchase",
      amount: "- ₹2,500",
      status: "Success"
    },
    {
      date: "16-Jul-2026",
      description: "Electricity Bill",
      amount: "- ₹1,200",
      status: "Success"
    },
    {
      date: "17-Jul-2026",
      description: "UPI Transfer",
      amount: "- ₹850",
      status: "Success"
    }
  ];

  return (

    <div className="container mt-5">

      <div className="dashboard-table">

        <h3 className="mb-4">Recent Transactions</h3>

        <table className="table table-hover">

          <thead>

            <tr>

              <th>Date</th>

              <th>Description</th>

              <th>Amount</th>

              <th>Status</th>

            </tr>

          </thead>

          <tbody>

            {transactions.map((txn, index) => (

              <tr key={index}>

                <td>{txn.date}</td>

                <td>{txn.description}</td>

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

    </div>

  );

}

export default RecentTransactions;
