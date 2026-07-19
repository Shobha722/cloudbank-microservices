import requests

def forward_get(url):

    response = requests.get(url)

    return response.json(), response.status_code


def forward_post(url, data):

    response = requests.post(url, json=data)

    return response.json(), response.status_code


def forward_delete(url):

    response = requests.delete(url)

    return response.json(), response.status_code
