// Display the dog’s name included in a message to the user that describes the dog using each property. For example, 

 var dog = {
    "name": "Clifford",
    "breed": "Labrador Retriever",
    "tvShow": "Clifford the Big Red Dog",
    "note": "a giant dog that gets in constant trouble oh silly me!. ",
    "mysound": "I sound very intimidating ",
    "canTalk": false, 

    "message": function(){
        let talkString = "";

        if (this.canTalk == true)
         talkString = " I can talk";
        else
         talkString= "I cannot talk.";

        return `<p>Hello, my name is ${this.name}, <br> when I bark ${this.mysound}. 
        You probably saw me from the Tv Show ${this.tvShow}. <br>
       I am a ${this.breed} and In the show, I am ${this.note} <br>${talkString}</p>`
    }
};

document.getElementById("dogintro").innerHTML = dog.message();

// Now create another dog object called myDogConst using a simple constructor.

class Dog{
    constructor (name ="",
    breed= "", tvShow="", mysound="",  note ="", canTalk = false)
{
        this.name = name
        this.breed = breed
        this.tvShow = tvShow
        this.note = note
        this.mysound = mysound 
        this.canTalk = canTalk
}
//Use the same information you used to create the object literal. This time add a new property named canTalk and give it a true or false value. 
myGreeting()
{
        let talkString = "";

        if (this.canTalk == true)
         talkString = " I can talk";
        else
         talkString= "I cannot talk.";
 

        return`<p>Hello, my name is ${this.name}, when I bark ${this.mysound}. <br>
        You probably saw me from the Tv Show  ${this.tvShow}. <br>
        I am a ${this.breed}  and In the show, I am  ${this.note} <br> ${talkString} </p>`
 }
};

//Create an object method called myGreeting (a method is a function stored in an object) as one of the properties. 
let clifford= new Dog("Clifford", "Labrador Retrieverr","Clifford the Big Red Dog","I sound very intimidating because of my","a giant dog that gets in constant trouble oh silly me!. ","I have a ",false)
document.getElementById("newdog").innerHTML = clifford.myg0reeting;
// Display dog properties on page
let message = `hello Im ${clifford.name} and my i am a ${clifford.breed}  you probably saw me from ${clifford.tvShow} who is ${clifford.note} I may be scary because  ${clifford.mysound}.`;
document.getElementById("newdog").innerHTML = message;

// Display dog greeting on page
const greeting = clifford.myGreeting();
document.getElementById("newdog").innerHTML = greeting;

// make two new intaces of the dog class with arguments passed to the constructors
let cinammon = new Dog("Cinammon", "yorkie","The Big Bang Theory","I sound very sweet because i am a tiny ","I am raj's pet the show about 4 nerdy scientists.. ",true)
let cleo = new Dog("Cleo", "Poodle","Clifford the Big Red Dog","I don't sound very intimidating because I am small ","the friend of a giant dog that gets in constant trouble oh boy!. ",true)



let text = "";


for(var item in cinammon)
    text += `<b>${item}:</b> ${cinammon[item]} <br>`;


document.getElementById("output3").innerHTML = text;



var dogList = [];


dogList.push(clifford);
dogList.push(cinammon);
dogList.push(cleo);


dogList.forEach(dog => {
    for(var item in dog)
    {
        console.log(`${item}: ${dog[item]}`);
    }

console.log("-----------------------------");
})


function search()
{
   

var result = dogList.find(dog => dog.name == search);

if(result)
{

    var text =`<b>${result.name}</b> was found!<br>`;
    for (var item in result)
    text += `<b>${item}: </b> ${result[item]} <br>`; 

    document.getElementById("output4").innerHTML = text;

    document.getElementById("output5").innerHTML = result.myGreeting();
}
else
{
    document.getElementById("output4").innerHTML = `<b>Error: </b> ${search} was not found. Try again.`;
 document.getElementById("output5").innerHTML = "";

}

}

