from database.db import db
from models.account import Account


def create_account(account):

    db.session.add(account)
    db.session.commit()

    return account


def get_all_accounts():

    return Account.query.all()


def get_account(account_id):

    return Account.query.get(account_id)


def delete_account(account):

    db.session.delete(account)
    db.session.commit()
