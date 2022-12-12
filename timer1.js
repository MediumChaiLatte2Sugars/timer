const arguments = process.argv.slice(2);

/*
Simple function which takes an array, creating an alarm for each number contained in the array
denoting the time (in seconds) before the alarm bell sounds.
*/
const createAlarms = function(alarmTimes){
  // Assembling the alarms
  for (let alarm of alarmTimes){
    
    // Skip negative numbers and non-numbers
    if (Number(alarm) < 0 || isNaN(alarm)){
      continue;
    }

    setTimeout(() => { process.stdout.write('\x07'); }, alarm * 1000);
  }
}

// Check if we even have args
if (arguments){
  createAlarms(arguments);
}

