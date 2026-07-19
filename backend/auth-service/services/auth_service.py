from repository.user_repository import create_user
from repository.user_repository import get_user


def register_user(data):

    user = create_user(
        data["username"],
        data["password"],
        data["email"]
    )

    return {
        "message": "User Registered Successfully",
        "username": user.username
    }


def login_user(data):

    user = get_user(data["username"])

    if user is None:

        return {
            "message": "Invalid Username"
        }, 401

    if user.password != data["password"]:

        return {
            "message": "Invalid Password"
        }, 401

    return {
        "message": "Login Successful",
        "username": user.username
    }
