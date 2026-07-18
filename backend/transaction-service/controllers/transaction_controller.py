from flask import request, jsonify

from services.transaction_service import (
    add_transaction,
    fetch_transactions,
    fetch_transaction,
    remove_transaction
)


def create():

    data = request.get_json()

    return jsonify(add_transaction(data)), 201


def get_all():

    return jsonify(fetch_transactions())


def get_one(transaction_id):

    response = fetch_transaction(transaction_id)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)


def delete(transaction_id):

    response = remove_transaction(transaction_id)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)
