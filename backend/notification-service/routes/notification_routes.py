from flask import Blueprint

from controllers.notification_controller import (
    create,
    get_all,
    get_one,
    delete
)

notification = Blueprint("notification", __name__)


@notification.route("/health", methods=["GET"])
def health():

    return {
        "service": "Notification Service",
        "status": "UP"
    }


@notification.route("/notifications", methods=["POST"])
def create_notification():

    return create()


@notification.route("/notifications", methods=["GET"])
def list_notifications():

    return get_all()


@notification.route("/notifications/<int:notification_id>", methods=["GET"])
def get_notification(notification_id):

    return get_one(notification_id)


@notification.route("/notifications/<int:notification_id>", methods=["DELETE"])
def delete_notification(notification_id):

    return delete(notification_id)
