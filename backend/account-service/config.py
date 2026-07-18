import os

class Config:

    APP_NAME = "CloudBank Account Service"

    DEBUG = os.getenv("DEBUG", "True") == "True"

    HOST = "0.0.0.0"

    PORT = int(os.getenv("PORT", 5001))

    SQLALCHEMY_DATABASE_URI = (
        f"postgresql://"
        f"{os.getenv('POSTGRES_USER')}:"
        f"{os.getenv('POSTGRES_PASSWORD')}@"
        f"{os.getenv('POSTGRES_HOST')}:"
        f"{os.getenv('POSTGRES_PORT')}/"
        f"{os.getenv('POSTGRES_DB')}"
    )

    SQLALCHEMY_TRACK_MODIFICATIONS = False
