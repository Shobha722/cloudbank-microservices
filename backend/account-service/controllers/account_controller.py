from flask import request, jsonify

from services.account_service import (
    add_account,
    fetch_accounts,
    fetch_account,
    remove_account
)


def create():

    data = request.get_json()

    return jsonify(add_account(data)), 201


def get_all():

    return jsonify(fetch_accounts())


def get_one(account_id):

    response = fetch_account(account_id)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)


def delete(account_id):

    response = remove_account(account_id)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)
