module.exports = swanStation

function swanStation (options) {
  if (!options.call && typeof options.call !== 'function') throw new Error('function to call must be set')

  var pressed = Date.now()
  var time = options.time || 1000 * 60 * 108
  var destroyed = false

  var check = function () {
    if (!destroyed) {
      var now = Date.now()
      if (now > pressed + time) {
        if (options.reset) {
          pressed = pressed + time
          var checkDelay = now - pressed
          setTimeout(check, time - checkDelay)
        } else {
          destroyed = true
        }
        options.call()
      } else {
        setTimeout(check, time - (now - pressed))
      }
    }
  }

  setTimeout(check, time)

  var button = function () {
    pressed = Date.now()
    return pressed
  }
  button.destroy = function () {
    destroyed = true
  }
  button.isDestroyed = function () {
    return destroyed
  }

  return button
}
