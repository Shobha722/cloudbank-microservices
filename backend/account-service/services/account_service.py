from models.account import Account
from repository.account_repository import (
    create_account,
    get_all_accounts,
    get_account,
    delete_account
)


def add_account(data):

    account = Account(
        account_number=data["account_number"],
        customer_name=data["customer_name"],
        account_type=data["account_type"],
        balance=data["balance"]
    )

    create_account(account)

    return {
        "message": "Account Created Successfully"
    }


def fetch_accounts():

    accounts = get_all_accounts()

    result = []

    for account in accounts:

        result.append({
            "id": account.id,
            "account_number": account.account_number,
            "customer_name": account.customer_name,
            "account_type": account.account_type,
            "balance": float(account.balance)
        })

    return result


def fetch_account(account_id):

    account = get_account(account_id)

    if account is None:

        return {"message": "Account Not Found"}, 404

    return {
        "id": account.id,
        "account_number": account.account_number,
        "customer_name": account.customer_name,
        "account_type": account.account_type,
        "balance": float(account.balance)
    }


def remove_account(account_id):

    account = get_account(account_id)

    if account is None:

        return {"message": "Account Not Found"}, 404

    delete_account(account)

    return {"message": "Account Deleted Successfully"}
