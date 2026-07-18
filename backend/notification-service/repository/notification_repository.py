from database.db import db
from models.notification import Notification


def create_notification(notification):

    db.session.add(notification)
    db.session.commit()

    return notification


def get_all_notifications():

    return Notification.query.all()


def get_notification(notification_id):

    return Notification.query.get(notification_id)


def delete_notification(notification):

    db.session.delete(notification)
    db.session.commit()
