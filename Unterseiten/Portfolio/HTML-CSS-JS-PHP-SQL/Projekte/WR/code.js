function Umrechnen() {
    var BIE = document.WR.BIE.value;
    var ZW = document.WR.ZW.value;
    //alert(BIN);
    //alert(ZW);

    if (ZW == "USD") {
        var Faktor = 1.12;
    }
    else if (ZW == "YEN"){
        var Faktor = 129.44;
    }
    else if (ZW == "GBP"){
        var Faktor = 0.84;
    }
    else if (ZW == "CHF") {
        var Faktor = 1.05;
    }
    else if (ZW == "CZK") {
        var Faktor = 25.49;
    }
    else if (ZW == "RUB") {
        var Faktor = 83.64;
    }
    else if (ZW == "TRY") {
        var Faktor = 13.46;
    }
    else if (ZW == "PLN") {
        var Faktor = 4.67;
    }
    else if (ZW == "KRW") {
        var Faktor = 1336.83;
    }
    else if (ZW == "ZAR") {
        var Faktor = 17.85;
    }
    var ER = (BIE * Faktor);
    alert(BIE + " EUR = " + ER + " " + ZW);
    //alert(ER);
    document.WR.ER.value = ER;
}