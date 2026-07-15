from flask import Flask
from flask_cors import CORS

from config import Config
from routes.auth_routes import auth
app = Flask(__name__)

app.config.from_object(Config)

CORS(app)

app.register_blueprint(auth)


if __name__ == "__main__":

    app.run(

        host=Config.HOST,

        port=Config.PORT,

        debug=Config.DEBUG

    )
