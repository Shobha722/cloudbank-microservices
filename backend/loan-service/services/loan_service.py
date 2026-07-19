from models.loan import Loan

from repository.loan_repository import (
    create_loan,
    get_all_loans,
    get_loan,
    delete_loan
)


def add_loan(data):

    loan = Loan(
        customer_name=data["customer_name"],
        loan_type=data["loan_type"],
        amount=data["amount"],
        status=data["status"]
    )

    create_loan(loan)

    return {
        "message": "Loan Created Successfully"
    }


def fetch_loans():

    loans = get_all_loans()

    result = []

    for loan in loans:

        result.append({
            "id": loan.id,
            "customer_name": loan.customer_name,
            "loan_type": loan.loan_type,
            "amount": float(loan.amount),
            "status": loan.status,
            "created_at": str(loan.created_at)
        })

    return result


def fetch_loan(loan_id):

    loan = get_loan(loan_id)

    if loan is None:
        return {"message": "Loan Not Found"}, 404

    return {
        "id": loan.id,
        "customer_name": loan.customer_name,
        "loan_type": loan.loan_type,
        "amount": float(loan.amount),
        "status": loan.status,
        "created_at": str(loan.created_at)
    }


def remove_loan(loan_id):

    loan = get_loan(loan_id)

    if loan is None:
        return {"message": "Loan Not Found"}, 404

    delete_loan(loan)

    return {
        "message": "Loan Deleted Successfully"
    }
