function addition() {
    var Z1 = Number(document.TR.Z1.value);
    var Z2 = Number(document.TR.Z2.value);
    var ergebnis = Z1 + Z2;
    alert("Ergebnis der Addition: " + ergebnis);
    document.TR.ER.value = ergebnis;
    //alert(Z1);
    //alert(Z2);
}
function subtraktion() {
    var Z1 = Number(document.TR.Z1.value);
    var Z2 = Number(document.TR.Z2.value);
    var ergebnis = Z1 - Z2;
    alert("Ergebnis der Subtraktion: " + ergebnis);
    document.TR.ER.value = ergebnis;
    //alert(Z1);
    //alert(Z2);
}

function multiplikation() {
    var Z1 = Number(document.TR.Z1.value);
    var Z2 = Number(document.TR.Z2.value);
    var ergebnis = Z1 * Z2;
    alert("Ergebnis der Multiplikation: " + ergebnis);
    document.TR.ER.value = ergebnis;
    //alert(Z1);
    //alert(Z2);
}

function division() {
    var Z1 = Number(document.TR.Z1.value);
    var Z2 = Number(document.TR.Z2.value);
    var ergebnis = Z1 / Z2;
    alert("Ergebnis der Division: " + ergebnis);
    document.TR.ER.value = ergebnis;
    //alert(Z1);
    //alert(Z2);
}