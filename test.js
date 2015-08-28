var test = require('tape')
var swanStation = require('./index.js')

test('#swanStation - trigger', function (t) {
  t.plan(2)
  var timeout = 20
  var time = Date.now()
  var button
  var initiateMeltdown = function () {
    if (Date.now() > time + timeout) {
      t.pass('should trigger after timeout time')
    } else {
      t.fail('should trigger after timeout time - this happened to fast')
    }
    t.equal(button.isDestroyed(), true, 'should then be destroyed')
  }

  button = swanStation({ time: timeout, call: initiateMeltdown })
})

test('#swanStation - not trigger', function (t) {
  t.plan(1)
  var timeout = 20
  var initiateMeltdown = function () { t.fail('should not be triggered') }
  var button = swanStation({ time: timeout, call: initiateMeltdown })
  var press = setInterval(function () {
    button()
  }, timeout / 2)
  setTimeout(function () {
    button.destroy()
    clearInterval(press)
    t.pass('should not be triggered')
  }, timeout * 2)
})

test('#swanStation - trigger and repeat', function (t) {
  var tests = 3
  t.plan(tests)
  var timeout = 20
  var count = 0
  var button
  var pressedTime
  var initiateMeltdown = function () {
    var now = Date.now()
    count++
    var shouldMeldownAt = pressedTime + (count * timeout)
    if (now > shouldMeldownAt && now - 20 < shouldMeldownAt) {
      t.pass('should be triggered at an regular interval')
    } else {
      t.fail('should be triggered at an regular interval')
    }
    if (count >= tests) {
      button.destroy()
    }
  }
  button = swanStation({ time: timeout, call: initiateMeltdown, reset: true })
  pressedTime = button()
})
