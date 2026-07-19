from flask import Blueprint, jsonify, request
from services.auth_service import login_user, register_user

auth = Blueprint("auth", __name__)


@auth.route("/health", methods=["GET"])
def health():

    return jsonify({

        "status": "UP",

        "service": "Auth Service"

    })


@auth.route("/register", methods=["POST"])
def register():

    data = request.get_json()

    return jsonify(register_user(data)), 201


@auth.route("/login", methods=["POST"])
def login():

    data = request.get_json()

    return login_user(data)
