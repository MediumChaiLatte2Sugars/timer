const arguments = process.argv.slice(2);

// Check if we even have args
if (arguments){

  // Assembling the alarms
  for (let alarm of arguments){
    
    // Skip negative numbers and non-numbers
    if (alarm < 0 || !isNaN(alarm)){
      continue;
    }

    setTimeout(() => { process.stdout.write('\x07'); }, alarm * 1000);
  }
}

