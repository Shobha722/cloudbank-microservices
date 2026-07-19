def validate_email(email):

    return "@" in email


def validate_password(password):

    return len(password) >= 6
