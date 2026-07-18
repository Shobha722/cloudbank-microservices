from flask import request, jsonify

from services.notification_service import (
    add_notification,
    fetch_notifications,
    fetch_notification,
    remove_notification
)


def create():

    data = request.get_json()

    return jsonify(add_notification(data)), 201


def get_all():

    return jsonify(fetch_notifications())


def get_one(notification_id):

    response = fetch_notification(notification_id)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)


def delete(notification_id):

    response = remove_notification(notification_id)

    if isinstance(response, tuple):
        return jsonify(response[0]), response[1]

    return jsonify(response)
