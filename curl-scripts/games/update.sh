#!/bin/bash

curl "https://tic-tac-toe-api-production.herokuapp.com/games/${ID}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=${TOKEN}"\
  --data '{
    "game": {
      "cell": {
        "index": 0,
        "value": "x"
        },
      "over": false
      }
    }'

echo
