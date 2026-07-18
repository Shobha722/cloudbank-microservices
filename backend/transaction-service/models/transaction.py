from database.db import db

class Transaction(db.Model):

    __tablename__ = "transactions"

    id = db.Column(db.Integer, primary_key=True)

    account_number = db.Column(db.String(20))

    transaction_type = db.Column(db.String(20))

    amount = db.Column(db.Numeric(15,2))

    transaction_date = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )
