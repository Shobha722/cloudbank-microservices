from flask import Blueprint, jsonify
from services.account_service import get_accounts

account = Blueprint("account", __name__)


@account.route("/health", methods=["GET"])
def health():

    return jsonify({

        "status": "UP",

        "service": "Account Service"

    })


@account.route("/accounts", methods=["GET"])
def accounts():

    return jsonify(get_accounts())
