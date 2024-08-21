// Display the welcome message
console.log("Welcome to Holberton School, what is your name?");

// Listen for user input
process.stdin.on('data', (data) => {
    // Trim any extra whitespace/newlines from the input
    const name = data.toString().trim();
    
    // Display the user's name
    console.log(`Your name is: ${name}`);
    
    // End the process and display the closing message
    console.log("This important software is now closing");
    process.exit();
});
