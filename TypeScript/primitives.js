"use strict";
// die paramenternamen sind placeholders, wichtig ist die reihenfolge
function add(n1, n2, showResult, phrase) {
    // wir berechnen hier die Summe von n1 und n2
    // und speichern das Ergebnis in der Variable result
    // damit das Ergebniss nicht verfälscht wird wegen einem String
    const result = n1 + n2;
    // showResult überprüft ob es "true" ist
    // wenn man "false" überprüfen möchte, dann !swhoResult
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase = "Result is: ";
const result = add(number1, number2, printResult, resultPhrase);
// console.log(result);
