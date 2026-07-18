from database.db import db

class Notification(db.Model):

    __tablename__ = "notifications"

    id = db.Column(db.Integer, primary_key=True)

    customer_name = db.Column(db.String(100))

    message = db.Column(db.Text)

    status = db.Column(db.String(20))

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )
