'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const api = require('./../scripts/auth/api')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/functions')
$(() => {
  // your JS code goes here
  $('#sign-up').on('submit',authEvents.onSignUp)
  $('#sign-in').on('submit',authEvents.onSignIn)
  $('#change-password').on('submit',authEvents.on)
  //$('#').on('submit',authEvents.on
  // $('#change-password').on('submit',authEvents.onChangePassword)
  // $('#sign-out').on('submit',authEvents.onSignOut)
  // $('#sign-in').on('submit',authEvents.onSignIn)

//  $('')
})
