from flask import Blueprint

from controllers.transaction_controller import (
    create,
    get_all,
    get_one,
    delete
)

transaction = Blueprint("transaction", __name__)


@transaction.route("/health", methods=["GET"])
def health():

    return {
        "service": "Transaction Service",
        "status": "UP"
    }


@transaction.route("/transactions", methods=["POST"])
def create_transaction():

    return create()


@transaction.route("/transactions", methods=["GET"])
def list_transactions():

    return get_all()


@transaction.route("/transactions/<int:transaction_id>", methods=["GET"])
def get_transaction(transaction_id):

    return get_one(transaction_id)


@transaction.route("/transactions/<int:transaction_id>", methods=["DELETE"])
def delete_transaction(transaction_id):

    return delete(transaction_id)
