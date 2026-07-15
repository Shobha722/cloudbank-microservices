from flask import Blueprint, jsonify

from services.loan_service import get_all_loans

loan = Blueprint("loan", __name__)


@loan.route("/health", methods=["GET"])
def health():

    return jsonify({

        "status": "UP",

        "service": "Loan Service"

    })


@loan.route("/loans", methods=["GET"])
def get_loans():

    return jsonify(get_all_loans())
