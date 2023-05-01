// Write a for loop that counts from 0 to 10. Each time through the loop, check if the current number is odd or even and display a message to the webpage.
function evenOdd(number)
{
    if(number == 0)
        return("Zero is even")
    else if(number % 2 == 0)
       return(number+"is even number")
    else 
      return(number+"is odd number")

}
var text = "";

// for loop that executes until the value of i = 20
for(var i = 0; i <= 10; i++)
{
      // add on the text value
      text += evenOdd(i) + "<br>"

}



// once tha loop concludes, display the output in the id named 'output'
document.getElementById('output').innerHTML = text;


// once tha loop concludes, display the output in the id named 'output'
