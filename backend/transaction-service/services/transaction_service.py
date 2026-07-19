from models.transaction import Transaction
from repository.transaction_repository import (
    create_transaction,
    get_all_transactions,
    get_transaction,
    delete_transaction
)


def add_transaction(data):

    transaction = Transaction(
        account_number=data["account_number"],
        transaction_type=data["transaction_type"],
        amount=data["amount"]
    )

    create_transaction(transaction)

    return {
        "message": "Transaction Created Successfully"
    }


def fetch_transactions():

    transactions = get_all_transactions()

    result = []

    for transaction in transactions:

        result.append({
            "id": transaction.id,
            "account_number": transaction.account_number,
            "transaction_type": transaction.transaction_type,
            "amount": float(transaction.amount),
            "transaction_date": str(transaction.transaction_date)
        })

    return result


def fetch_transaction(transaction_id):

    transaction = get_transaction(transaction_id)

    if transaction is None:
        return {"message": "Transaction Not Found"}, 404

    return {
        "id": transaction.id,
        "account_number": transaction.account_number,
        "transaction_type": transaction.transaction_type,
        "amount": float(transaction.amount),
        "transaction_date": str(transaction.transaction_date)
    }


def remove_transaction(transaction_id):

    transaction = get_transaction(transaction_id)

    if transaction is None:
        return {"message": "Transaction Not Found"}, 404

    delete_transaction(transaction)

    return {
        "message": "Transaction Deleted Successfully"
    }
