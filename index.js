// Target each input field and error message field
let DecInp = document.getElementById("DecInp");
let BinInp = document.getElementById("BinInp");
let errMsg = document.getElementById("error-msg");
let converter = document.getElementById("converter");
let converter1 = document.getElementById("converter1");
let BinIp = document.getElementById("BinIp");
let DecIp = document.getElementById("DecIp");

// Decimal to binary Converter Function
let BinVal;
DecInp.addEventListener("input", () => {
    let decValue = parseInt(DecInp.value);
    if (decValue >= 0) {
        BinVal = decValue.toString(2);
    }
    // If the input decimal value is negative 
    else {
        dec = Math.abs(decValue);
        //get the first compliment
        var res = dec ^ parseInt((new Array(dec.toString(2).length + 1)).join("1"), 2);
        // Now 2s compliment is calculated
        BinVal = (res + 1).toString(2);
    }
});
converter.addEventListener("click", () => {
    BinInp.value = BinVal;
});


// Binary to decimal converter function
let DecVal;
BinIp.addEventListener("input", () => {
    let binValue = BinIp.value;
    // If the binary value is valid then convert it into decimal value
    if (binValidator(binValue)) {
        //  If binary value is valid then in this section will execute
        DecVal = parseInt(binValue, 2);
        errMsg.textContent = "";
    }
    //    Else Error message will be displayed on the screen 
    else {
        errMsg.textContent = "Please Enter an Valid Binary Input";

    }

    // Function to check whether the binary value is valid or not
    // i.e if binary value contains any number other than 0 or 1 then the bellow function will return false value 
    // other wise it will return true value
    function binValidator(binNum) {
        for (let i = 0; i < binNum.length; i++) {
            if (binNum[i] != "0" && binNum[i] != "1") {
                return false;
            }
        }
        return true;
    }
});


converter1.addEventListener("click", () => {
    DecIp.value = DecVal;
});