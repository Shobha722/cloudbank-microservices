import "../styles/dashboard.css";

function QuickActions() {

  return (

    <div className="container mt-5 mb-5">

      <div className="dashboard-table">

        <h3 className="mb-4">
          Quick Actions
        </h3>

        <div className="row">

          <div className="col-md-3 mb-3">

            <button className="btn btn-primary w-100">
              Transfer Money
            </button>

          </div>

          <div className="col-md-3 mb-3">

            <button className="btn btn-success w-100">
              Pay Bills
            </button>

          </div>

          <div className="col-md-3 mb-3">

            <button className="btn btn-warning w-100">
              Open FD
            </button>

          </div>

          <div className="col-md-3 mb-3">

            <button className="btn btn-danger w-100">
              Apply Loan
            </button>

          </div>

        </div>

      </div>

    </div>

  );

}

export default QuickActions;
