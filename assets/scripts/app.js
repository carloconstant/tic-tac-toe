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
  $('#change-password').on('submit',authEvents.onChangePassword)
  $('#change-password').hide()
  $('.board').hide()
  $('#sign-out').hide()
  $('.replay').hide()
  $('.replay').on('submit',authEvents.onReplay)
//  $('.position-1').on('submit',authEvents.onClick)
  //$('#').on('submit',authEvents.on
  // $('#change-password').on('submit',authEvents.onChangePassword)
  // $('#sign-out').on('submit',authEvents.onSignOut)
  // $('#sign-in').on('submit',authEvents.onSignIn)

//  $('')
})
