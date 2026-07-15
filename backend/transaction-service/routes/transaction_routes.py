from flask import Blueprint, jsonify

from services.transaction_service import get_all_transactions

transaction = Blueprint("transaction", __name__)


@transaction.route("/health", methods=["GET"])
def health():

    return jsonify({

        "status": "UP",

        "service": "Transaction Service"

    })


@transaction.route("/transactions", methods=["GET"])
def transactions():

    return jsonify(get_all_transactions())
