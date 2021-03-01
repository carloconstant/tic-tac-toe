'use strict'
const config = require('../config')
const store = require('./../store')

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'Token token= ' + store.user.token
    },
    method: 'GET'
  })
}
const create = function () {
  return $.ajax({
    url: config.apiUrl + '/games/',
    headers: {
      Authorization: 'Token token= ' + store.user.token
    },
    method: 'POST',
    data: ''
  })
}
const update = function (index, value, over) {
  return $.ajax({
    url: config.apiUrl + `/games/${store.game.id}`,
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    method: 'PATCH',
    data: {
      'game': {
        'cell': {
          'index': index,
          'value': value
        },
        'over': over
      }
    }
  })
}
module.exports = {
  create,
  update,
  index
}
