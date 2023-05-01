// array of strings
var subjects = ["Accounting", "Algebra", "Programming", "Art", "Data Analytics"];

var output1 = "";


subjects.forEach((subject, index) => {
    if (index == subjects.length - 1)
        output1 += subject;
    else     
        output1 += subject+'<br>';
        
});
document.getElementById('arrayContents1').innerHTML = output1;

// accessed using a ,forEach() and displayed using comma as seperator
var output2 = "";
subjects.forEach((subject, index) => {
    if (index == subjects.length - 1)
        output2 += subject;
    else     
        output2 += subject + ", ";

});
document.getElementById('arrayContents2').innerHTML = output2;



