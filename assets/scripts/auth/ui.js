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
}
const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, try again')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInFailure,
  signInSuccess
}
