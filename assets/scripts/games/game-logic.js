'use strict'
const store = require('../store')
const ui = require('./ui')

store.board = ['', '', '', '', '', '', '', '', '']
store.p1 = 'X'
store.gameOver = false

const player = function () {
  if (store.p1 === 'X') {
    store.p1 = 'O'
} else {
    store.p1 = 'X'
  }
}
const reset = function () {
  store.p1 = 'X'
  store.board.fill('')
  store.gameOver = false
  $('.box').text('')
}
const game = function () {
  const win = function () {
    if (store.board[0] === store.board[8] && store.board[4] === store.board[0]) {
      return true
    } else if (store.board[0] === store.board[3] && store.board[0] === store.board[6]) {
      return true
    } else if (store.board[0] === store.board[1] && store.board[0] === store.board[2]) {
      return true
    } else if (store.board[3] === store.board[4] && store.board[3] === store.board[5]) {
      return true
    } else if (store.board[4] === store.board[1] && store.board[4] === store.board[7]) {
      return true
    } else if (store.board[4] === store.board[6] && store.board[4] === store.board[2]) {
      return true
    } else if (store.board[6] === store.board[8] && store.board[8] === store.board[7]) {
      return true
    } else if (store.board[8] === store.board[5] && store.board[8] === store.board[2]) {
      return true
    } else {
      return false
    }
  }
  if (win === true) {
    ui.winner()
  } else {
    ui.tie()
  }
}
module.exports = {
  player,
  game,
  reset
}
