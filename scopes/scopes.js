// Scopes

// Global Scopes
//Variable die nicht innerhalb einer Funktion deklariert ist!
// const a = 'globales a';

// function test() {
//     //Zugriff auf globale Variable möglich
//     console.log(a);
// }

// test();


// //Function Scope
// function test2() {
//     // shadowed Variable NAme
//     const a = 'lokale Variable in Funktion test2';
//     console.log(a);
// }
// test2();




// function test3() {
//     // variablen die innerhalb von Funkjtionen deklariert werden
//     // sind nur dort Sichtbar!
//     const b = 0;
// }

// console.log(b);



// function test4() {
// // Function Scope
//     const a = 'a in function';
//     if (true){
//         // Block Scope innerhalb von if
//         const b = 'a in if'
//         console.log(a); // Zugriff auf a in Function Scope
//         console.log(b); // Zugriff auf b in block Scope von if
//     }
//     console.log(a); // Zugriff auf a in function Scope
// }

// test4();