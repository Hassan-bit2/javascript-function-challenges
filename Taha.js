/*For this challenge, if the user types a number
less than 10, use a loop to print out the
numbers from zero to 9 in the console.*/

function myCounter() {
    var myNum = prompt("Please enter your number!")
    if (myNum < 10) {
        console.log("You entered a number smaller than 10");
    }
    else if(myNum > 9){
        console.log("You entered a number greater than 10");
    }
    else{
        console.log("Error! You didn't enter a number!");
    }
}
myCounter();