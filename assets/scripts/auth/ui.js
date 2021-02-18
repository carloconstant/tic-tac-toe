const store = require('./../store')

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
}
const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, try again')
}
const signInSuccess = function (response) {
  store.user = response.user

  $('#error-message').text('Signed in!')
  $('#sign-in').trigger('reset')

  $('.board').show()
  $('#change-password').show()
  $('#sign-out').show()
  $('.replay').show()
  $('#sign-up').hide()
  $('#sign-in').hide()
}
const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, try again')
}
const changePasswordSuccess = function () {
  $('#error-message').text('your password was changed')
  $('#error-message').removeClass()
  $('#error-message').addClass('success')

  $('#change-password').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('#error-message').text('that was not your password')
  $('#error-message').removeClass()
  $('#error-message').addClass()
}
const signOut = function (event) {
  $('#error-message').text('you signed out')
  $('#sign-out').trigger('reset')

  $('.board').hide()
  $('#change-password').hide()
  $('#sign-up').show()
  $('#sign-in').hide()
  $('.replay').hide()
}
const onCreateSuccess = function (data) {
  $('#error-message').text('Game successfully created')
  $('#error-message').removeClass()
  $('#error-message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onCreateFailure = function (error) {
  $('#error-message').text('Error on creating a newgame')
  $('#error-message').removeClass()
  $('#error-message').addClass('failure')
  console.error('onCreateFailure ran. Error is :', error)
}

const onIndexSuccess = function (data) {
  $('#error-message').text('All Games successfully received')
  $('#error-messagee').removeClass()
  $('#error-message').addClass('success')
  console.log('onIndexSuccess ran. Data is :', data.games)
}

const onIndexFailure = function (error) {
  $('#error-message').text('Error on getting games')
  $('#error-message').removeClass()
  $('#message').addClass('failure')
  console.error('onIndexFailure ran. Error is :', error)
}

const onShowSuccess = function (data) {
  $('#error-message').text('One Game successfully shown')
  $('#error-message').removeClass()
  $('#error-message').addClass('success')
  console.log('onCreateSuccess ran. Data is :', data)
}

const onShowFailure = function (error) {
  $('#error-message').text('Error on getting game')
  $('#error-message').removeClass()
  $('#error-message').addClass('failure')
  console.error('onShowFailure ran. Error is :', error)
}

const replay = function (event) {
  let i
  i++
  $('#error-message').text(i)
}
module.exports = {
  onIndexSuccess,
  onIndexFailure,
  signUpSuccess,
  onShowSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess,
  changePasswordSuccess,
  changePasswordFailure,
  signOut,
  replay,
  onShowFailure,
  onCreateFailure
}
