from flask import Blueprint, jsonify

from services.notification_service import get_notifications

notification = Blueprint("notification", __name__)


@notification.route("/health", methods=["GET"])
def health():

    return jsonify({

        "status":"UP",

        "service":"Notification Service"

    })


@notification.route("/notifications", methods=["GET"])
def notifications():

    return jsonify(get_notifications())
