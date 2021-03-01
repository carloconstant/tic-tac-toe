#!/bin/bash

curl "https://tic-tac-toe-api-production.herokuapp.com/games/${ID}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --header "Authorization: Token ${TOKEN}"\
  --data '{}'

echo
