# swan-station
You have to call the function button within a designated time or a another function will be called. 
Calling the function resets the timer

Yes this is a silly silly name... But it is [thematic](http://lostpedia.wikia.com/wiki/Pushing_the_button).

## example

```javacript
var swanStation = require('swan-station')

var button = swanStation({ time: 1000 * 60 * 1, call: function(){ console.log('Meltdown!') } })

// call this button every minute or Meltdown! will be initiated
button()

// to destroy the button
button.destroy()
```
