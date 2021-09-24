console.log("Hello")
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });

readline.question('Please create a password; ', password => {
    readline.close();
    if (password.length > 10){
        console.log("Password Created!")
    } else {
        console.log("Please create a password longer than 10 characters")
    }
});