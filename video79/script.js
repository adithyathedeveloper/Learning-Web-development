let a= prompt("Enter first number");
let b= prompt("Enter second number");
if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Input values must be numbers");
}
let sum = parseInt(a) + parseInt(b);

console.log("The sum is:", sum);


function main() {
let x = 5;
try {
    console.log("The sum is:", sum*x);
    return true;
} catch (error) {
    console.log("Error aagaya bhai");
    return false;
}
finally {
    console.log("Files are closed, database connection is being closed");
}
}
let c = main();