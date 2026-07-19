
from database.db import db

class Loan(db.Model):

    __tablename__ = "loans"

    id = db.Column(db.Integer, primary_key=True)

    customer_name = db.Column(db.String(100))

    loan_type = db.Column(db.String(50))

    amount = db.Column(db.Numeric(15,2))

    status = db.Column(db.String(30))

    created_at = db.Column(
        db.DateTime,
        server_default=db.func.now()
    )
