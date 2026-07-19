from database.db import db
from models.transaction import Transaction


def create_transaction(transaction):

    db.session.add(transaction)
    db.session.commit()

    return transaction


def get_all_transactions():

    return Transaction.query.all()


def get_transaction(transaction_id):

    return Transaction.query.get(transaction_id)


def delete_transaction(transaction):

    db.session.delete(transaction)
    db.session.commit()
