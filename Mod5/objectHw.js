
// Display the dog’s name included in a message to the user that describes the dog using each property. For example, 

 let dog = {
    "name": "Clifford",
    "breed": "Labrador Retriever",
    "tvShow": "Clifford the Big Red Dog",
    "note": "a giant dog that gets in constant trouble oh silly me!. ",
    "mysound": "I sound very intimidating ",

    "message": function(){
        return `<p>Hello, my name is ${this.name}, <br> when I bark ${this.mysound}. 
        You probably saw me from the Tv Show ${this.tvShow}. <br>
       I am a ${this.breed} and In the show, I am ${this.note}</p>`
    }
};

document.getElementById("dogintro").innerHTML = dog.message();

// Now create another dog object called myDogConst using a simple constructor.

class Dog{
    constructor (name,
    breed, tvShow, mysound,  note , canTalk = false)
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

        if (this.canTalk)
         talkString = " big voice";
        else
         talkString= "I cannot talk.";
 

        return`<p>Hello, my name is ${this.name}, when I bark ${this.mysound}. <br>
        You probably saw me from the Tv Show  ${this.tvShow}. <br>
        I am a ${this.breed}  and In the show, I am  ${this.note} <br> ${talkString} </p>`
 }
};

//Create an object method called myGreeting (a method is a function stored in an object) as one of the properties. 
const myDogConst = new Dog("Clifford", "Labrador Retrieverr","Clifford the Big Red Dog","I sound very intimidating because of my","a giant dog that gets in constant trouble oh silly me!. ","I have a ", true)

// Display dog properties on page
const message = `hello Im ${myDogConst.name} and my i am a ${myDogConst.breed}  you probably saw me from ${myDogConst.tvShow} who is ${myDogConst.note} I may be scary because  ${myDogConst.sound}.`;
document.getElementById("newdog").innerHTML = message;

// Display dog greeting on page
const greeting = myDogConst.myGreeting();
document.getElementById("newdog").innerHTML = greeting;