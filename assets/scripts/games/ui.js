'use strict'
const store = require('./../store')

const onReplaySuccess = function (data) {
  $('#board').show()
  $('#error-message').text('new game')
  $('#error-message').removeClass()
  // $('#replay').show('.board')
  $('#error-message').addClass('success')

  store.game = data.game
  console.log('the game ran: ', data)
}
const onReplayFailure = function (error) {
  $('#error-message').text('play again')
  $('#error-message').removeClass()
  $('#error-message').addClass('failure')
  console.error('onReplayFailure ran error', error)
}
const updateSuccess = function (data) {
  $('#board').show()
  $('#error-message').text('the game was updated')
  $('#error-message').removeClass()
  $('#error-message').addClass('success')
  console.log('updateSuccess ran. data: ', data)
}
const updateFailure = function (error) {
  $('#error-message').text('Error on update game')
  $('#error-message').removeClass()
  $('#error-message').addClass('failure')
  console.error('update failure ran error: ', error)
}
const spotTaken = function () {
  $('#error-message').text('bad move error').show()
  setTimeout(function () {
    $('#error-message').hide()
  }, 5000)
}
const gameOver = function () {
  $('#error-message').text('INVALID MOVE: Game Over - Click \'replay \' to play again').show()

  setTimeout(function () {
    $('#error-message').hide()
  }, 4000)
}

const winner = function () {
  store.gameOver = true

  $('#error-message').text(`${store.p1} Wins! Click 'New Game' to play again`).show()

  setTimeout(function () {
    $('#error-message').hide()
  }, 4000)
}

const tie = function (msg) {
  store.gameOver = true
  $('#error-message').text('It\'s a tie! Click \'New Game\' to play again').show()

  setTimeout(function () {
    $('#error-message').hide()
  }, 4000)
}
module.exports = {
  onReplaySuccess,
  onReplayFailure,
  updateFailure,
  updateSuccess,
  spotTaken,
  gameOver,
  winner,
  tie
}
