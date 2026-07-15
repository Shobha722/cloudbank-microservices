from flask import Blueprint, jsonify

from config import Config

from services.gateway_service import forward_request

gateway = Blueprint("gateway", __name__)


@gateway.route("/health", methods=["GET"])
def health():

    return jsonify({

        "status": "UP",

        "service": "API Gateway"

    })


@gateway.route("/accounts", methods=["GET"])
def accounts():

    return jsonify(

        forward_request(

            Config.ACCOUNT_SERVICE + "/accounts"

        )

    )


@gateway.route("/transactions", methods=["GET"])
def transactions():

    return jsonify(

        forward_request(

            Config.TRANSACTION_SERVICE + "/transactions"

        )

    )


@gateway.route("/loans", methods=["GET"])
def loans():

    return jsonify(

        forward_request(

            Config.LOAN_SERVICE + "/loans"

        )

    )


@gateway.route("/notifications", methods=["GET"])
def notifications():

    return jsonify(

        forward_request(

            Config.NOTIFICATION_SERVICE + "/notifications"

        )

    )
