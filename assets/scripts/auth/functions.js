const api = require('./api')
const ui = require('./ui')

const getFormFields = require('../../../lib/get-form-fields')
const onSignUp = function (event) {
  event.preventDefault()
  console.log('Your all signed up!')

  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  console.log('welcome!')

  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}

// const onShowGame = function (event) {
//   // by default, a form refreshes the page. We do this to prevent the
//   // page from refreshing
//   event.preventDefault()
//   // event.target is the form #books-show, the element we added our
//   // event handler to
//   const form = event.target
//   const formData = getFormFields(form)
//   console.log('formData is', formData)
//   // call our show request, give in the id of the specific book
//   // we want to show
//   api.show(formData.game.id)
//     .then(ui.onShowSuccess)
//     .catch(ui.onError)
// }
module.exports = {
  onSignUp,
  onSignIn
}
