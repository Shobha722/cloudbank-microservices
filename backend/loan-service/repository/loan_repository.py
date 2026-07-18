from database.db import db
from models.loan import Loan

def create_loan(loan):
    db.session.add(loan)
    db.session.commit()
    return loan

def get_all_loans():
    return Loan.query.all()

def get_loan(loan_id):
    return Loan.query.get(loan_id)

def delete_loan(loan):
    db.session.delete(loan)
    db.session.commit()
