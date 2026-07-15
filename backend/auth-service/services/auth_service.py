from flask import jsonify


def register_user(data):

    return {

        "message": "User Registered Successfully",

        "user": data

    }


def login_user(data):

    username = data.get("username")

    password = data.get("password")

    if username == "admin" and password == "admin123":

        return jsonify({

            "message": "Login Successful",

            "token": "sample-jwt-token"

        })

    return jsonify({

        "message": "Invalid Username or Password"

    }), 401
