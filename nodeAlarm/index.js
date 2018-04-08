/*written by Robert Newton*/

var time = process.argv[2].split(':');
var shell = require('shelljs');

function simpleAlarm () {
  var now = new Date();

    if (now.getUTCHours() >= time[0] && now.getUTCMinutes() >= time[1]) {
        //this was done with macOS, the other options would open chrome but without any sound. 
        shell.exec('/usr/bin/open -a "/Applications/Google Chrome.app" "https://www.youtube.com/watch?v=IIypdzgZAaI"');
    setInterval(function () {
      console.log("Hey... time to get up");
    }, 1000);
  }
  else {
    console.log(now.getHours() + ':' + now.getMinutes());
    setTimeout(simpleAlarm, 1000*60);
  }
}
console.log("Check your volume, this won't work without volume");
console.log("You want to wake up at: "+time.join(":"));

simpleAlarm();

