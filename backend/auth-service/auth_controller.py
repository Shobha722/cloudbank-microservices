from flask import request
from flask import jsonify

from services.auth_service import register_user
from services.auth_service import login_user


def register():

    data = request.get_json()

    return jsonify(register_user(data))


def login():

    data = request.get_json()

    response = login_user(data)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)
