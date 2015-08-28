# swan-station
You have to call the function button within a designated time or a another function will be called.
Calling the function resets the timer

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

Yes this is a silly silly name... But it is [thematic](http://lostpedia.wikia.com/wiki/Pushing_the_button).

## example

```javacript
var swanStation = require('swan-station')

var initiateMeltdown = function(){ console.log('Meltdown!') }
var button = swanStation({ time: 1000 * 60 * 108, call: initiateMeltdown, reset: false })
// if reset is set to true the countdown will reset on meltdown forever until destroy is manually called

// call this button at least every 108 minutes or meltdown will be initiated
button()

// to manually destroy the button
button.destroy()
```

## install
with npm do:

```
npm install --save swan-station
```
