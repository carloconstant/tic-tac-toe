const config = require('../config')
const store = require('./../store')

const signUp = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in',
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const changePassword = function (data) {
  console.log('data is ', data)
  console.log('store is ', store)

  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const index = function () {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games',
    headers: {
      Authorization: 'number of games ' + store.user.token
    }
  })
}
const show = function (games) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/games/' + games.id,
    header: {
      Authorization: ' games id' + store.user.token
    }
  })
}
const create = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/games/',
    header: {
      Authorization: 'games id' + store.user.token
    },
    data
  })
}
const update = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/games' + data.games.id,
    headers: {
      Authorization: 'Token token= ' + store.user.token
    }
  })
}
module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword,
  index,
  show,
  create,
  update
}
