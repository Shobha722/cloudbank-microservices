from database.db import db


class Account(db.Model):

    __tablename__ = "accounts"

    id = db.Column(db.Integer, primary_key=True)

    account_number = db.Column(db.String(20), unique=True, nullable=False)

    customer_name = db.Column(db.String(100))

    account_type = db.Column(db.String(30))

    balance = db.Column(db.Numeric(15, 2))

    created_at = db.Column(db.DateTime, server_default=db.func.now())
