class Config:

    APP_NAME = "CloudBank API Gateway"

    DEBUG = True

    HOST = "0.0.0.0"

    PORT = 8080

    AUTH_SERVICE = "http://localhost:5000"

    ACCOUNT_SERVICE = "http://localhost:5001"

    TRANSACTION_SERVICE = "http://localhost:5002"

    LOAN_SERVICE = "http://localhost:5003"

    NOTIFICATION_SERVICE = "http://localhost:5004"
