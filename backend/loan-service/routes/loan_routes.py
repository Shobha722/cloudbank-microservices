from flask import Blueprint

from controllers.loan_controller import (
    create,
    get_all,
    get_one,
    delete
)

loan = Blueprint("loan", __name__)


@loan.route("/health", methods=["GET"])
def health():

    return {
        "service": "Loan Service",
        "status": "UP"
    }


@loan.route("/loans", methods=["POST"])
def create_loan():

    return create()


@loan.route("/loans", methods=["GET"])
def list_loans():

    return get_all()


@loan.route("/loans/<int:loan_id>", methods=["GET"])
def get_loan(loan_id):

    return get_one(loan_id)


@loan.route("/loans/<int:loan_id>", methods=["DELETE"])
def delete_loan(loan_id):

    return delete(loan_id)
