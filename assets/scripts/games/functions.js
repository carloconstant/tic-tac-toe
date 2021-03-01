'use strict'
const api = require('./api')
const ui = require('./ui')
const store = require('../store')
const logic = require('./game-logic')

const onReplay = function (event) {
  logic.reset()
  api.create()
    .then(ui.onReplaySuccess)
    .catch(ui.onReplayFailure)
}
const onClickBox = function (event) {
  if (store.gameOver) {
    ui.gameOver()
  } else if ($(event.target).text() !== '') {
    ui.spotTaken()
  } else {
    const index = $(event.target).data('id')

    api.update(index, store.p1, false)
      .then(data => {
        $(event.target).text(store.p1)
        store.board[index] = store.p1
        ui.updateSuccess(data)
      })
      .catch(ui.updateFailure)
  }
}
const addHandle = () => {
  $('#new-game').on('click', onReplay)
  $('.box').on('click', onClickBox)
}

module.exports = {
  onReplay,
  addHandle
}
