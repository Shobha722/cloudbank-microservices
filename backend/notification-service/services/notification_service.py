from models.notification import Notification

from repository.notification_repository import (
    create_notification,
    get_all_notifications,
    get_notification,
    delete_notification
)


def add_notification(data):

    notification = Notification(
        customer_name=data["customer_name"],
        message=data["message"],
        status=data["status"]
    )

    create_notification(notification)

    return {
        "message": "Notification Created Successfully"
    }


def fetch_notifications():

    notifications = get_all_notifications()

    result = []

    for notification in notifications:

        result.append({
            "id": notification.id,
            "customer_name": notification.customer_name,
            "message": notification.message,
            "status": notification.status,
            "created_at": str(notification.created_at)
        })

    return result


def fetch_notification(notification_id):

    notification = get_notification(notification_id)

    if notification is None:
        return {"message": "Notification Not Found"}, 404

    return {
        "id": notification.id,
        "customer_name": notification.customer_name,
        "message": notification.message,
        "status": notification.status,
        "created_at": str(notification.created_at)
    }


def remove_notification(notification_id):

    notification = get_notification(notification_id)

    if notification is None:
        return {"message": "Notification Not Found"}, 404

    delete_notification(notification)

    return {
        "message": "Notification Deleted Successfully"
    }
