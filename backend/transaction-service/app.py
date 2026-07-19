from flask import Flask
from flask_cors import CORS

from config import Config
from database.db import db
from models.transaction import Transaction
from routes.transaction_routes import transaction

app = Flask(__name__)

app.config.from_object(Config)

db.init_app(app)

CORS(app)

app.register_blueprint(transaction)

if __name__ == "__main__":

    with app.app_context():
        db.create_all()

    app.run(
        host=Config.HOST,
        port=Config.PORT,
        debug=Config.DEBUG
    )
