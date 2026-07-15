import requests

from config import Config


def forward_request(service_url):

    response = requests.get(service_url)

    return response.json()
