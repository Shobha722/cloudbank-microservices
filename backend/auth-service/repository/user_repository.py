from database.db import db
from models.user import User


def create_user(username, password, email):

    user = User(
        username=username,
        password=password,
        email=email
    )

    db.session.add(user)

    db.session.commit()

    return user


def get_user(username):

    return User.query.filter_by(username=username).first()
