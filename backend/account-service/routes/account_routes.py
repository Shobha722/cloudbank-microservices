from flask import Blueprint

from controllers.account_controller import (
    create,
    get_all,
    get_one,
    delete
)

account = Blueprint("account", __name__)


@account.route("/health", methods=["GET"])
def health():

    return {
        "service": "Account Service",
        "status": "UP"
    }


@account.route("/accounts", methods=["POST"])
def create_account():

    return create()


@account.route("/accounts", methods=["GET"])
def list_accounts():

    return get_all()


@account.route("/accounts/<int:account_id>", methods=["GET"])
def get_account(account_id):

    return get_one(account_id)


@account.route("/accounts/<int:account_id>", methods=["DELETE"])
def delete_account(account_id):

    return delete(account_id)
