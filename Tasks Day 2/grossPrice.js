
// Gross Price

// // erstellen Variable 
// let netPrice = 20;
// let tax = .19;

// // aktualisierung Variablen
// netPrice = 40;
// tax = .19;


// def. function
function calcGrossPrice (netPrice, tax) {
    // if (
    //     Number.isInteger(netPrice) &&
    //     typeof tax === 'number' &&
    //     tax < 1 &&
    //     tax !== 0
    // ) {
    //     +
        const grossPrice = netPrice + netPrice * tax;
        return grossPrice;
    }

// ausführen der Function
let ausgabe = calcGrossPrice(20, .19);
console.log(ausgabe); // ergebnis 23.8
ausgabe = calcGrossPrice(40, .16);
console.log(ausgabe); // ergebnis 46.4






// Add Positive Function
function addPositive(a, b){
    if (a < 0) {
        a = a * -1;
    }
    if ( b < 0) {
        b = b * -1;
    }
    const c = a+b;
    return c;
}

ausgabe = addPositive(2,3);
console.log(ausgabe); // ergebnis 5
ausgabe = addPositive(3, -5);
console.log(ausgabe); // ergebnis 8
ausgabe = addPositive(-1, -8);
console.log(ausgabe); // ergebnis 9






// Foo Bar Function
function fooBar(eingabe) {
if (eingabe === 'foo');
    return 'bar';
} else if (eingabe === 'bar') {
    return 'foo';
} else  {
    return 'foobar';
}

const result1 = fooBar("foo");
// result1 should be "bar"

const result2 = fooBar("bar");
// result2 should be "foo"

const result3 = fooBar("xxx");
// result3 should be "foobar"

const result4 = fooBar("aa");
// result4 should be "foobar"