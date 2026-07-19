from flask import Blueprint, jsonify, request

from config import Config

from services.gateway_service import (
    forward_get,
    forward_post,
    forward_delete
)

gateway = Blueprint("gateway", __name__)


@gateway.route("/health")
def health():

    return jsonify({
        "service": "API Gateway",
        "status": "UP"
    })


# ---------------- AUTH ---------------- #

@gateway.route("/register", methods=["POST"])
def register():

    response, status = forward_post(
        Config.AUTH_SERVICE + "/register",
        request.json
    )

    return jsonify(response), status


@gateway.route("/login", methods=["POST"])
def login():

    response, status = forward_post(
        Config.AUTH_SERVICE + "/login",
        request.json
    )

    return jsonify(response), status


# ---------------- ACCOUNT ---------------- #

@gateway.route("/accounts", methods=["GET", "POST"])
def accounts():

    if request.method == "GET":

        response, status = forward_get(
            Config.ACCOUNT_SERVICE + "/accounts"
        )

    else:

        response, status = forward_post(
            Config.ACCOUNT_SERVICE + "/accounts",
            request.json
        )

    return jsonify(response), status


# ---------------- TRANSACTION ---------------- #

@gateway.route("/transactions", methods=["GET", "POST"])
def transactions():

    if request.method == "GET":

        response, status = forward_get(
            Config.TRANSACTION_SERVICE + "/transactions"
        )

    else:

        response, status = forward_post(
            Config.TRANSACTION_SERVICE + "/transactions",
            request.json
        )

    return jsonify(response), status


# ---------------- LOAN ---------------- #

@gateway.route("/loans", methods=["GET", "POST"])
def loans():

    if request.method == "GET":

        response, status = forward_get(
            Config.LOAN_SERVICE + "/loans"
        )

    else:

        response, status = forward_post(
            Config.LOAN_SERVICE + "/loans",
            request.json
        )

    return jsonify(response), status


# ---------------- NOTIFICATION ---------------- #

@gateway.route("/notifications", methods=["GET", "POST"])
def notifications():

    if request.method == "GET":

        response, status = forward_get(
            Config.NOTIFICATION_SERVICE + "/notifications"
        )

    else:

        response, status = forward_post(
            Config.NOTIFICATION_SERVICE + "/notifications",
            request.json
        )

    return jsonify(response), status
