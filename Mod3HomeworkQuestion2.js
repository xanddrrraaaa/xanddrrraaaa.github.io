// variable to hold an empty text string 

function doWhile(){
var text = "";

//Ask the user for a number between 5 and 20, and store their input in the variable myNum.
var myNum = document.getElementById('input').value;



//Variable for loop counter
var i = 1;

// do while loop that executes until the equals the value of myNum. 
if(myNum >=5 && myNum <=20){
  do 
  {
       // add on the text value
       text += "This is iteration #" + i + "<br>"

     // increment the valueof i
     i ++;
  }while(i <=myNum);
}
else
  console.log("Invalid input")
// once tha loop concludes, display the output in the id named 'output'
document.getElementById('output').innerHTML = text;

}