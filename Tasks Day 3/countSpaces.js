// countSpaces Function
console.log('Task: count Spaces!');

// toDo
/* countSpaces function
Create a function that receives a string as a parameter and returns the count of spaces containing the string.

 The function should have 1 parameter
 Check if it is a string
 It should return an integer
 It should return nothing when no parameter was passed in.
*/


function controllForString(eingabe) {
    // prüfen ob Parameter = string!
    if (typeof eingabe === 'string') {
    console.log('die Variable ist EIN String!');
    } else {
    console.log('die Variable ist KEIN String!');
    }
    // ausgabe wieviele Zeichen der String hat! 
    console.log(eingabe.length);
}
controllForString('test test test ');
controllForString(123);




// function countSpaces() {
//     let myString = 'Hannes Hannes ';
//     console.log(myString.length);
// }
// countSpaces();