//Ask the user for their first name and store it in the variable Fname. After the user types in their name, display a welcome message that contains the name they entered.
var userName = window.prompt("Enter your name: ");
document.getElementById("name").innerHTML= "<b>Your Name: </b>" + userName;

//Create the constant piValue to store the value of Pi to 7 significant digits (3.1415926).
const myPi = 3.1415926;

//Ask the user to input their favorite number and store the value in a variable myFavNum
var favoriteNumber = window.prompt("Enter your Favorite Number:");
// document.getElementById("favoriteNumber").innerHTML = "<b>Favorite Number: </b>" + favoriteNumber;

//Calculate the area of a circle using the user’s favorite number as the radius ( r )
var circleArea = myPi * (favoriteNumber*favoriteNumber);


//Store the result in a new variable myArea.
var myArea = circleArea;


//Hello Sam, you entered 33 as your favorite number. If that was the radius of a circle, the circle’s area would be 311.017667.
document.getElementById("name").innerHTML= "Hello, " + userName + "! you entered " + favoriteNumber + " as your favorite number. If that was the radius of a circle, the circle’s area would be " + myArea;


// var length = window.prompt("Enter the length of the side of a square (in inches): ");
// var sqArea = parseInt(length) * parseInt(length);
// let myArea = myPi * (favoriteNumber**2);
// document.getElementById("area").innerHTML = "<b>Area of the circle with radius of : </b>" + length +
//                                             " inches <br>" +
//                                             "<b>Area: </b>"+ sqArea + " sq. inches"; 

