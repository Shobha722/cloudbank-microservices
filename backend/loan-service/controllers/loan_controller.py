from flask import request, jsonify

from services.loan_service import (
    add_loan,
    fetch_loans,
    fetch_loan,
    remove_loan
)


def create():

    data = request.get_json()

    return jsonify(add_loan(data)), 201


def get_all():

    return jsonify(fetch_loans())


def get_one(loan_id):

    response = fetch_loan(loan_id)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)


def delete(loan_id):

    response = remove_loan(loan_id)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)
