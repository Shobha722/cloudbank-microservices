from flask import jsonify


def success(data=None, message="Success"):

    return jsonify({

        "status": "SUCCESS",

        "message": message,

        "data": data

    })


def error(message="Error"):

    return jsonify({

        "status": "FAILED",

        "message": message

    }),400
