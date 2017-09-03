// User enters two numbers and show which one is bigger
        //make two vars Number1 and Number2 each =s to 0
        //if statment 
        // if 2 is bigger than one
        // if 1 is bigger than 2
alert ("This program will see what two number is bigger")
let first = prompt("Enter first number", "00") //stores users input 
let second = prompt("Enter second number", "00")
first =parseInt(first) //converts user input to int
second =parseInt(second)
if ( first <= second)  // tell you if fist number is smaller than second number
    {
        alert("First number is smaller than second number")

    }
    else if ( first >= second) //tell if second number is bigger than first
    {
        alert("Second Number is bigger than first Number ");
    }