const arguments = process.argv.slice(2);

// Assembling the alarms
for (let alarm of arguments){
  setTimeout(process.stdout.write('\x07'), alarm * 1000);
}

// // The sound we need!
// process.stdout.write('\x07');