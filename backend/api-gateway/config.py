import os

class Config:

    APP_NAME = "CloudBank API Gateway"

    DEBUG = os.getenv("DEBUG", "True") == "True"

    HOST = "0.0.0.0"

    PORT = int(os.getenv("PORT", 8080))

    AUTH_SERVICE = os.getenv(
        "AUTH_SERVICE",
        "http://auth-service:5000"
    )

    ACCOUNT_SERVICE = os.getenv(
        "ACCOUNT_SERVICE",
        "http://account-service:5001"
    )

    TRANSACTION_SERVICE = os.getenv(
        "TRANSACTION_SERVICE",
        "http://transaction-service:5002"
    )

    LOAN_SERVICE = os.getenv(
        "LOAN_SERVICE",
        "http://loan-service:5003"
    )

    NOTIFICATION_SERVICE = os.getenv(
        "NOTIFICATION_SERVICE",
        "http://notification-service:5004"
    )
